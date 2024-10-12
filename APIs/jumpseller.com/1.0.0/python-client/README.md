# openapi-client
# Endpoint Structure

All URLs are in the format: 

```text
https://api.jumpseller.com/v1/path.json?login=XXXXXX&authtoken=storetoken  
```

The path is prefixed by the API version and the URL takes as parameters the login (your store specific API login) and your authentication token.
<br/><br/>
***

# Version

The current version of the API is **v1**.  
If we change the API in backward-incompatible ways, we'll increase the version number and maintain stable support for the old urls.
<br/><br/>
***

# Authentication

The API uses a token-based authentication with a combination of a login key and an auth token. **Both parameters can be found on the left sidebar of the Account section, accessed from the main menu of your Admin Panel**. The auth token of the user can be reset on the same page.

![Store Login](/images/support/api/apilogin.png)

The auth token is a **32 characters** string.

If you are developing a Jumpseller App, the authentication should be done using [OAuth-2](/support/oauth-2). Please read the article [Build an App](/support/apps) for more information.
<br/><br/>
***

# Curl Examples

To request all the products at your store, you would append the products index path to the base url to create an URL with the format:  

```text
https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX
```

In curl, you can invoque that URL with:  

```text
curl -X GET \"https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX\"
```

To create a product, you will include the JSON data and specify the MIME Type:  

```text
curl -X POST -d '{ \"product\" : {\"name\": \"My new Product!\", \"price\": 100} }' \"https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\"
```

and to update the product identified with 123:  

```text
curl -X PUT -d '{ \"product\" : {\"name\": \"My updated Product!\", \"price\": 99} }' \"https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\"
```

or delete it:  

```text
curl -X DELETE \"https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\"
```
<br/><br/>
***

# PHP Examples

Create a new Product (POST method)

```php
$url = 'https://api.jumpseller.com/v1/products.json?login=XXXXX&authtoken=XXXXX;
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, \"POST\"); //post method
curl_setopt($ch, CURLOPT_POSTFIELDS, '{ \"product\" : {\"name\": \"My updated Product!\", \"price\": 99} }');

$result = curl_exec($ch);
print_r($result);
curl_close($ch);
```
<br/><br/>
***

# Plain JSON only. No XML.

* We only support JSON for data serialization.
* Our node format has no root element.  
* We use snake_case to describe attribute keys (like \"created_at\").  
* All empty value are replaced with **null** strings.
* All API URLs end in .json to indicate that they accept and return JSON.
* POST and PUT methods require you to explicitly state the MIME type of your request's body content as **\"application/json\"**.
<br/><br/>
***

# Rate Limit
You can perform a maximum of:

+ 240 (two hundred forty) requests per minute and
+ 8 (eight) requests per second 

If you exceed this limit, you'll get a 403 Forbidden (Rate Limit Exceeded) response for subsequent requests.  

The rate limits apply by IP address and by store. This means that multiple requests on different stores are not counted towards the same rate limit.

This limits are necessary to ensure resources are correctly used. Your application should be aware of this limits and retry any unsuccessful request, check the following Ruby stub:

```ruby
tries = 0; max_tries = 3;
begin
  HTTParty.send(method, uri) # perform an API call.
  sleep 0.5
  tries += 1
rescue
  unless tries >= max_tries
    sleep 1.0 # wait the necessary time before retrying the call again.
    retry
  end
end
```

Finally, you can review the Response Headers of each request:

```text
Jumpseller-PerMinuteRateLimit-Limit: 60  
Jumpseller-PerMinuteRateLimit-Remaining: 59 # requests available on the per-second interval  
Jumpseller-PerSecondRateLimit-Limit: 2  
Jumpseller-PerSecondRateLimit-Remaining: 1 # requests available on the per-second interval
``` 

to better model your application requests intervals.

In the event of getting your IP banned, the Response Header `Jumpseller-BannedByRateLimit-Reset` informs you the time when will your ban be reseted.
<br/><br/>
***

# Pagination

By default we will return 50 objects (products, orders, etc) per page. There is a maximum of 100, using a query string `&limit=100`.
If the result set gets paginated it is your responsibility to check the next page for more objects -- you do this by using query strings `&page=2`, `&page=3` and so on.

```text
https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX&page=3&limit=100
```
<br/><br/>
***

# More
* [Jumpseller API wrapper](https://gitlab.com/jumpseller-api/ruby) provides a public Ruby abstraction over our API;
* [Apps Page](/apps) showcases external integrations with Jumpseller done by technical experts;
* [Imgbb API](https://api.imgbb.com/) provides an easy way to upload and temporaly host for images and files.
<br/><br/>
***
<br/><br/>


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)



# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    code = 'code_example' # str | Code of the App

    try:
        # Delete an existing JSApp.
        api_response = api_instance.jsapps_code_json_delete(login, authtoken, code)
        print("The response of AppsApi->jsapps_code_json_delete:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AppsApi->jsapps_code_json_delete: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.jumpseller.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AppsApi* | [**jsapps_code_json_delete**](docs/AppsApi.md#jsapps_code_json_delete) | **DELETE** /jsapps/{code}.json | Delete an existing JSApp.
*AppsApi* | [**jsapps_code_json_get**](docs/AppsApi.md#jsapps_code_json_get) | **GET** /jsapps/{code}.json | Retrieve a JSApp.
*AppsApi* | [**jsapps_json_get**](docs/AppsApi.md#jsapps_json_get) | **GET** /jsapps.json | Retrieve all the Store&#39;s JSApps.
*AppsApi* | [**jsapps_json_post**](docs/AppsApi.md#jsapps_json_post) | **POST** /jsapps.json | Create a Store JSApp.
*CategoriesApi* | [**categories_count_json_get**](docs/CategoriesApi.md#categories_count_json_get) | **GET** /categories/count.json | Count all Categories.
*CategoriesApi* | [**categories_id_json_delete**](docs/CategoriesApi.md#categories_id_json_delete) | **DELETE** /categories/{id}.json | Delete an existing Category.
*CategoriesApi* | [**categories_id_json_get**](docs/CategoriesApi.md#categories_id_json_get) | **GET** /categories/{id}.json | Retrieve a single Category.
*CategoriesApi* | [**categories_id_json_put**](docs/CategoriesApi.md#categories_id_json_put) | **PUT** /categories/{id}.json | Modify an existing Category.
*CategoriesApi* | [**categories_json_get**](docs/CategoriesApi.md#categories_json_get) | **GET** /categories.json | Retrieve all Categories.
*CategoriesApi* | [**categories_json_post**](docs/CategoriesApi.md#categories_json_post) | **POST** /categories.json | Create a new Category.
*CheckoutCustomFieldsApi* | [**checkout_custom_fields_id_json_delete**](docs/CheckoutCustomFieldsApi.md#checkout_custom_fields_id_json_delete) | **DELETE** /checkout_custom_fields/{id}.json | Delete an existing CheckoutCustomField.
*CheckoutCustomFieldsApi* | [**checkout_custom_fields_id_json_get**](docs/CheckoutCustomFieldsApi.md#checkout_custom_fields_id_json_get) | **GET** /checkout_custom_fields/{id}.json | Retrieve a single CheckoutCustomField.
*CheckoutCustomFieldsApi* | [**checkout_custom_fields_id_json_put**](docs/CheckoutCustomFieldsApi.md#checkout_custom_fields_id_json_put) | **PUT** /checkout_custom_fields/{id}.json | Update a CheckoutCustomField.
*CheckoutCustomFieldsApi* | [**checkout_custom_fields_json_get**](docs/CheckoutCustomFieldsApi.md#checkout_custom_fields_json_get) | **GET** /checkout_custom_fields.json | Retrieve all Checkout Custom Fields.
*CheckoutCustomFieldsApi* | [**checkout_custom_fields_json_post**](docs/CheckoutCustomFieldsApi.md#checkout_custom_fields_json_post) | **POST** /checkout_custom_fields.json | Create a new CheckoutCustomField.
*CountriesApi* | [**countries_country_code_json_get**](docs/CountriesApi.md#countries_country_code_json_get) | **GET** /countries/{country_code}.json | Retrieve a single Country information.
*CountriesApi* | [**countries_country_code_regions_json_get**](docs/CountriesApi.md#countries_country_code_regions_json_get) | **GET** /countries/{country_code}/regions.json | Retrieve all Regions from a single Country.
*CountriesApi* | [**countries_country_code_regions_region_code_json_get**](docs/CountriesApi.md#countries_country_code_regions_region_code_json_get) | **GET** /countries/{country_code}/regions/{region_code}.json | Retrieve a single Region information object.
*CountriesApi* | [**countries_json_get**](docs/CountriesApi.md#countries_json_get) | **GET** /countries.json | Retrieve all Countries.
*CustomFieldSelectOptionsApi* | [**custom_fields_id_select_options_custom_field_select_option_id_json_get**](docs/CustomFieldSelectOptionsApi.md#custom_fields_id_select_options_custom_field_select_option_id_json_get) | **GET** /custom_fields/{id}/select_options/{custom_field_select_option_id}.json | Retrieve a single SelectOption from a CustomField.
*CustomFieldSelectOptionsApi* | [**custom_fields_id_select_options_custom_field_select_option_id_json_put**](docs/CustomFieldSelectOptionsApi.md#custom_fields_id_select_options_custom_field_select_option_id_json_put) | **PUT** /custom_fields/{id}/select_options/{custom_field_select_option_id}.json | Update a SelectOption from a CustomField.
*CustomFieldSelectOptionsApi* | [**custom_fields_id_select_options_json_get**](docs/CustomFieldSelectOptionsApi.md#custom_fields_id_select_options_json_get) | **GET** /custom_fields/{id}/select_options.json | Retrieve all Store&#39;s Custom Fields.
*CustomFieldSelectOptionsApi* | [**custom_fields_id_select_options_json_post**](docs/CustomFieldSelectOptionsApi.md#custom_fields_id_select_options_json_post) | **POST** /custom_fields/{id}/select_options.json | Create a new Custom Field Select Option.
*CustomFieldsApi* | [**custom_fields_id_json_delete**](docs/CustomFieldsApi.md#custom_fields_id_json_delete) | **DELETE** /custom_fields/{id}.json | Delete an existing CustomField.
*CustomFieldsApi* | [**custom_fields_id_json_get**](docs/CustomFieldsApi.md#custom_fields_id_json_get) | **GET** /custom_fields/{id}.json | Retrieve a single CustomField.
*CustomFieldsApi* | [**custom_fields_id_json_put**](docs/CustomFieldsApi.md#custom_fields_id_json_put) | **PUT** /custom_fields/{id}.json | Update a CustomField.
*CustomFieldsApi* | [**custom_fields_id_select_options_custom_field_select_option_id_json_delete**](docs/CustomFieldsApi.md#custom_fields_id_select_options_custom_field_select_option_id_json_delete) | **DELETE** /custom_fields/{id}/select_options/{custom_field_select_option_id}.json | Delete an existing CustomFieldSelectOption.
*CustomFieldsApi* | [**custom_fields_json_get**](docs/CustomFieldsApi.md#custom_fields_json_get) | **GET** /custom_fields.json | Retrieve all Store&#39;s Custom Fields.
*CustomFieldsApi* | [**custom_fields_json_post**](docs/CustomFieldsApi.md#custom_fields_json_post) | **POST** /custom_fields.json | Create a new Custom Field.
*CustomerAdditionalFieldsApi* | [**customers_id_fields_field_id_delete**](docs/CustomerAdditionalFieldsApi.md#customers_id_fields_field_id_delete) | **DELETE** /customers/{id}/fields/{field_id} | Delete a Customer Additional Field.
*CustomerAdditionalFieldsApi* | [**customers_id_fields_field_id_get**](docs/CustomerAdditionalFieldsApi.md#customers_id_fields_field_id_get) | **GET** /customers/{id}/fields/{field_id} | Retrieve a single Customer Additional Field.
*CustomerAdditionalFieldsApi* | [**customers_id_fields_field_id_put**](docs/CustomerAdditionalFieldsApi.md#customers_id_fields_field_id_put) | **PUT** /customers/{id}/fields/{field_id} | Update a Customer Additional Field.
*CustomerAdditionalFieldsApi* | [**customers_id_fields_get**](docs/CustomerAdditionalFieldsApi.md#customers_id_fields_get) | **GET** /customers/{id}/fields | Retrieves the Customer Additional Field of a Customer.
*CustomerAdditionalFieldsApi* | [**customers_id_fields_post**](docs/CustomerAdditionalFieldsApi.md#customers_id_fields_post) | **POST** /customers/{id}/fields | Adds Customer Additional Fields to a Customer.
*CustomerCategoriesApi* | [**customer_categories_id_customers_json_delete**](docs/CustomerCategoriesApi.md#customer_categories_id_customers_json_delete) | **DELETE** /customer_categories/{id}/customers.json | Delete Customers from an existing CustomerCategory.
*CustomerCategoriesApi* | [**customer_categories_id_customers_json_get**](docs/CustomerCategoriesApi.md#customer_categories_id_customers_json_get) | **GET** /customer_categories/{id}/customers.json | Retrieves the customers in a CustomerCategory.
*CustomerCategoriesApi* | [**customer_categories_id_customers_json_post**](docs/CustomerCategoriesApi.md#customer_categories_id_customers_json_post) | **POST** /customer_categories/{id}/customers.json | Adds Customers to a CustomerCategory.
*CustomerCategoriesApi* | [**customer_categories_id_json_delete**](docs/CustomerCategoriesApi.md#customer_categories_id_json_delete) | **DELETE** /customer_categories/{id}.json | Delete an existing CustomerCategory.
*CustomerCategoriesApi* | [**customer_categories_id_json_get**](docs/CustomerCategoriesApi.md#customer_categories_id_json_get) | **GET** /customer_categories/{id}.json | Retrieve a single CustomerCategory.
*CustomerCategoriesApi* | [**customer_categories_id_json_put**](docs/CustomerCategoriesApi.md#customer_categories_id_json_put) | **PUT** /customer_categories/{id}.json | Update a CustomerCategory.
*CustomerCategoriesApi* | [**customer_categories_json_get**](docs/CustomerCategoriesApi.md#customer_categories_json_get) | **GET** /customer_categories.json | Retrieve all Customer Categories.
*CustomerCategoriesApi* | [**customer_categories_json_post**](docs/CustomerCategoriesApi.md#customer_categories_json_post) | **POST** /customer_categories.json | Create a new CustomerCategory.
*CustomersApi* | [**customers_count_json_get**](docs/CustomersApi.md#customers_count_json_get) | **GET** /customers/count.json | Count all Customers.
*CustomersApi* | [**customers_email_email_json_get**](docs/CustomersApi.md#customers_email_email_json_get) | **GET** /customers/email/{email}.json | Retrieve a single Customer by email.
*CustomersApi* | [**customers_id_json_delete**](docs/CustomersApi.md#customers_id_json_delete) | **DELETE** /customers/{id}.json | Delete an existing Customer.
*CustomersApi* | [**customers_id_json_get**](docs/CustomersApi.md#customers_id_json_get) | **GET** /customers/{id}.json | Retrieve a single Customer by id.
*CustomersApi* | [**customers_id_json_put**](docs/CustomersApi.md#customers_id_json_put) | **PUT** /customers/{id}.json | Update a new Customer.
*CustomersApi* | [**customers_json_get**](docs/CustomersApi.md#customers_json_get) | **GET** /customers.json | Retrieve all Customers.
*CustomersApi* | [**customers_json_post**](docs/CustomersApi.md#customers_json_post) | **POST** /customers.json | Create a new Customer.
*FulfillmentsApi* | [**fulfillments_count_json_get**](docs/FulfillmentsApi.md#fulfillments_count_json_get) | **GET** /fulfillments/count.json | Count all Fulfillments.
*FulfillmentsApi* | [**fulfillments_id_json_get**](docs/FulfillmentsApi.md#fulfillments_id_json_get) | **GET** /fulfillments/{id}.json | Retrieve a single Fulfillment.
*FulfillmentsApi* | [**fulfillments_json_get**](docs/FulfillmentsApi.md#fulfillments_json_get) | **GET** /fulfillments.json | Retrieve all Fulfillments.
*FulfillmentsApi* | [**order_id_fulfillments_json_get**](docs/FulfillmentsApi.md#order_id_fulfillments_json_get) | **GET** /order/{id}/fulfillments.json | Retrieve the Fulfillments associated with the Order.
*HooksApi* | [**hooks_id_json_delete**](docs/HooksApi.md#hooks_id_json_delete) | **DELETE** /hooks/{id}.json | Delete an existing Hook.
*HooksApi* | [**hooks_id_json_get**](docs/HooksApi.md#hooks_id_json_get) | **GET** /hooks/{id}.json | Retrieve a single Hook.
*HooksApi* | [**hooks_id_json_put**](docs/HooksApi.md#hooks_id_json_put) | **PUT** /hooks/{id}.json | Update a Hook.
*HooksApi* | [**hooks_json_get**](docs/HooksApi.md#hooks_json_get) | **GET** /hooks.json | Retrieve all Hooks.
*HooksApi* | [**hooks_json_post**](docs/HooksApi.md#hooks_json_post) | **POST** /hooks.json | Create a new Hook.
*OrdersApi* | [**orders_after_id_json_get**](docs/OrdersApi.md#orders_after_id_json_get) | **GET** /orders/after/{id}.json | Retrieve orders filtered by Order Id.
*OrdersApi* | [**orders_count_json_get**](docs/OrdersApi.md#orders_count_json_get) | **GET** /orders/count.json | Count all Orders.
*OrdersApi* | [**orders_id_history_json_get**](docs/OrdersApi.md#orders_id_history_json_get) | **GET** /orders/{id}/history.json | Retrieve all Order History.
*OrdersApi* | [**orders_id_history_json_post**](docs/OrdersApi.md#orders_id_history_json_post) | **POST** /orders/{id}/history.json | Create a new Order History Entry.
*OrdersApi* | [**orders_id_json_get**](docs/OrdersApi.md#orders_id_json_get) | **GET** /orders/{id}.json | Retrieve a single Order.
*OrdersApi* | [**orders_id_json_put**](docs/OrdersApi.md#orders_id_json_put) | **PUT** /orders/{id}.json | Modify an existing Order.
*OrdersApi* | [**orders_json_get**](docs/OrdersApi.md#orders_json_get) | **GET** /orders.json | Retrieve all Orders.
*OrdersApi* | [**orders_json_post**](docs/OrdersApi.md#orders_json_post) | **POST** /orders.json | Create a new Order.
*OrdersApi* | [**orders_status_status_json_get**](docs/OrdersApi.md#orders_status_status_json_get) | **GET** /orders/status/{status}.json | Retrieve orders filtered by status.
*PagesApi* | [**pages_count_json_get**](docs/PagesApi.md#pages_count_json_get) | **GET** /pages/count.json | Count all Pages.
*PagesApi* | [**pages_id_json_delete**](docs/PagesApi.md#pages_id_json_delete) | **DELETE** /pages/{id}.json | Delete an existing Page.
*PagesApi* | [**pages_id_json_get**](docs/PagesApi.md#pages_id_json_get) | **GET** /pages/{id}.json | Retrieve a single Page by id.
*PagesApi* | [**pages_id_json_put**](docs/PagesApi.md#pages_id_json_put) | **PUT** /pages/{id}.json | Update a Page.
*PagesApi* | [**pages_json_get**](docs/PagesApi.md#pages_json_get) | **GET** /pages.json | Retrieve all Pages.
*PagesApi* | [**pages_json_post**](docs/PagesApi.md#pages_json_post) | **POST** /pages.json | Create a new Page.
*PartnersApi* | [**partners_stores_json_get**](docs/PartnersApi.md#partners_stores_json_get) | **GET** /partners/stores.json | Retrieve statistics.
*PartnersApi* | [**store_check_status_json_get**](docs/PartnersApi.md#store_check_status_json_get) | **GET** /store/check_status.json | Retrive store creation status.
*PartnersApi* | [**store_create_json_post**](docs/PartnersApi.md#store_create_json_post) | **POST** /store/create.json | Create a Partnered Store
*PaymentMethodsApi* | [**payment_methods_id_json_get**](docs/PaymentMethodsApi.md#payment_methods_id_json_get) | **GET** /payment_methods/{id}.json | Retrieve a single Payment Method.
*PaymentMethodsApi* | [**payment_methods_json_get**](docs/PaymentMethodsApi.md#payment_methods_json_get) | **GET** /payment_methods.json | Retrieve all Store&#39;s Payment Methods.
*ProductAttachmentsApi* | [**products_id_attachments_attachment_id_json_delete**](docs/ProductAttachmentsApi.md#products_id_attachments_attachment_id_json_delete) | **DELETE** /products/{id}/attachments/{attachment_id}.json | Delete a Product Attachment.
*ProductAttachmentsApi* | [**products_id_attachments_attachment_id_json_get**](docs/ProductAttachmentsApi.md#products_id_attachments_attachment_id_json_get) | **GET** /products/{id}/attachments/{attachment_id}.json | Retrieve a single Product Attachment.
*ProductAttachmentsApi* | [**products_id_attachments_count_json_get**](docs/ProductAttachmentsApi.md#products_id_attachments_count_json_get) | **GET** /products/{id}/attachments/count.json | Count all Product Attachments.
*ProductAttachmentsApi* | [**products_id_attachments_json_get**](docs/ProductAttachmentsApi.md#products_id_attachments_json_get) | **GET** /products/{id}/attachments.json | Retrieve all Product Attachments.
*ProductAttachmentsApi* | [**products_id_attachments_json_post**](docs/ProductAttachmentsApi.md#products_id_attachments_json_post) | **POST** /products/{id}/attachments.json | Create a new Product Attachment.
*ProductCustomFieldsApi* | [**products_id_fields_count_json_get**](docs/ProductCustomFieldsApi.md#products_id_fields_count_json_get) | **GET** /products/{id}/fields/count.json | Count all Product Custom Fields.
*ProductCustomFieldsApi* | [**products_id_fields_json_get**](docs/ProductCustomFieldsApi.md#products_id_fields_json_get) | **GET** /products/{id}/fields.json | Retrieve all Product Custom Fields
*ProductCustomFieldsApi* | [**products_id_fields_json_post**](docs/ProductCustomFieldsApi.md#products_id_fields_json_post) | **POST** /products/{id}/fields.json | Add an existing Custom Field to a Product.
*ProductCustomFieldsApi* | [**products_product_id_fields_field_id_json_delete**](docs/ProductCustomFieldsApi.md#products_product_id_fields_field_id_json_delete) | **DELETE** /products/{product_id}/fields/{field_id}.json | Delete value of Product Custom Field
*ProductCustomFieldsApi* | [**products_product_id_fields_field_id_json_put**](docs/ProductCustomFieldsApi.md#products_product_id_fields_field_id_json_put) | **PUT** /products/{product_id}/fields/{field_id}.json | Update value of Product Custom Field
*ProductDigitalProductsApi* | [**products_id_digital_products_count_json_get**](docs/ProductDigitalProductsApi.md#products_id_digital_products_count_json_get) | **GET** /products/{id}/digital_products/count.json | Count all Product DigitalProducts.
*ProductDigitalProductsApi* | [**products_id_digital_products_digital_product_id_json_delete**](docs/ProductDigitalProductsApi.md#products_id_digital_products_digital_product_id_json_delete) | **DELETE** /products/{id}/digital_products/{digital_product_id}.json | Delete a Product DigitalProduct.
*ProductDigitalProductsApi* | [**products_id_digital_products_digital_product_id_json_get**](docs/ProductDigitalProductsApi.md#products_id_digital_products_digital_product_id_json_get) | **GET** /products/{id}/digital_products/{digital_product_id}.json | Retrieve a single Product DigitalProduct.
*ProductDigitalProductsApi* | [**products_id_digital_products_json_get**](docs/ProductDigitalProductsApi.md#products_id_digital_products_json_get) | **GET** /products/{id}/digital_products.json | Retrieve all Product DigitalProducts.
*ProductDigitalProductsApi* | [**products_id_digital_products_json_post**](docs/ProductDigitalProductsApi.md#products_id_digital_products_json_post) | **POST** /products/{id}/digital_products.json | Create a new Product DigitalProduct.
*ProductImagesApi* | [**products_id_images_count_json_get**](docs/ProductImagesApi.md#products_id_images_count_json_get) | **GET** /products/{id}/images/count.json | Count all Product Images.
*ProductImagesApi* | [**products_id_images_image_id_json_delete**](docs/ProductImagesApi.md#products_id_images_image_id_json_delete) | **DELETE** /products/{id}/images/{image_id}.json | Delete a Product Image.
*ProductImagesApi* | [**products_id_images_image_id_json_get**](docs/ProductImagesApi.md#products_id_images_image_id_json_get) | **GET** /products/{id}/images/{image_id}.json | Retrieve a single Product Image.
*ProductImagesApi* | [**products_id_images_json_get**](docs/ProductImagesApi.md#products_id_images_json_get) | **GET** /products/{id}/images.json | Retrieve all Product Images.
*ProductImagesApi* | [**products_id_images_json_post**](docs/ProductImagesApi.md#products_id_images_json_post) | **POST** /products/{id}/images.json | Create a new Product Image.
*ProductOptionValuesApi* | [**products_id_options_option_id_values_count_json_get**](docs/ProductOptionValuesApi.md#products_id_options_option_id_values_count_json_get) | **GET** /products/{id}/options/{option_id}/values/count.json | Count all Product Option Values.
*ProductOptionValuesApi* | [**products_id_options_option_id_values_json_get**](docs/ProductOptionValuesApi.md#products_id_options_option_id_values_json_get) | **GET** /products/{id}/options/{option_id}/values.json | Retrieve all Product Option Values.
*ProductOptionValuesApi* | [**products_id_options_option_id_values_json_post**](docs/ProductOptionValuesApi.md#products_id_options_option_id_values_json_post) | **POST** /products/{id}/options/{option_id}/values.json | Create a new Product Option Value.
*ProductOptionValuesApi* | [**products_id_options_option_id_values_value_id_json_delete**](docs/ProductOptionValuesApi.md#products_id_options_option_id_values_value_id_json_delete) | **DELETE** /products/{id}/options/{option_id}/values/{value_id}.json | Delete a Product Option Value.
*ProductOptionValuesApi* | [**products_id_options_option_id_values_value_id_json_get**](docs/ProductOptionValuesApi.md#products_id_options_option_id_values_value_id_json_get) | **GET** /products/{id}/options/{option_id}/values/{value_id}.json | Retrieve a single Product Option Value.
*ProductOptionValuesApi* | [**products_id_options_option_id_values_value_id_json_put**](docs/ProductOptionValuesApi.md#products_id_options_option_id_values_value_id_json_put) | **PUT** /products/{id}/options/{option_id}/values/{value_id}.json | Modify an existing Product Option Value.
*ProductOptionsApi* | [**products_id_options_count_json_get**](docs/ProductOptionsApi.md#products_id_options_count_json_get) | **GET** /products/{id}/options/count.json | Count all Product Options.
*ProductOptionsApi* | [**products_id_options_json_get**](docs/ProductOptionsApi.md#products_id_options_json_get) | **GET** /products/{id}/options.json | Retrieve all Product Options.
*ProductOptionsApi* | [**products_id_options_json_post**](docs/ProductOptionsApi.md#products_id_options_json_post) | **POST** /products/{id}/options.json | Create a new Product Option.
*ProductOptionsApi* | [**products_id_options_option_id_json_delete**](docs/ProductOptionsApi.md#products_id_options_option_id_json_delete) | **DELETE** /products/{id}/options/{option_id}.json | Delete a Product Option.
*ProductOptionsApi* | [**products_id_options_option_id_json_get**](docs/ProductOptionsApi.md#products_id_options_option_id_json_get) | **GET** /products/{id}/options/{option_id}.json | Retrieve a single Product Option.
*ProductOptionsApi* | [**products_id_options_option_id_json_put**](docs/ProductOptionsApi.md#products_id_options_option_id_json_put) | **PUT** /products/{id}/options/{option_id}.json | Modify an existing Product Option.
*ProductVariantsApi* | [**products_id_variants_count_json_get**](docs/ProductVariantsApi.md#products_id_variants_count_json_get) | **GET** /products/{id}/variants/count.json | Count all Product Variants.
*ProductVariantsApi* | [**products_id_variants_json_get**](docs/ProductVariantsApi.md#products_id_variants_json_get) | **GET** /products/{id}/variants.json | Retrieve all Product Variants.
*ProductVariantsApi* | [**products_id_variants_json_post**](docs/ProductVariantsApi.md#products_id_variants_json_post) | **POST** /products/{id}/variants.json | Create a new Product Variant.
*ProductVariantsApi* | [**products_id_variants_variant_id_json_get**](docs/ProductVariantsApi.md#products_id_variants_variant_id_json_get) | **GET** /products/{id}/variants/{variant_id}.json | Retrieve a single Product Variant.
*ProductVariantsApi* | [**products_id_variants_variant_id_json_put**](docs/ProductVariantsApi.md#products_id_variants_variant_id_json_put) | **PUT** /products/{id}/variants/{variant_id}.json | Modify an existing Product Variant.
*ProductsApi* | [**products_after_id_json_get**](docs/ProductsApi.md#products_after_id_json_get) | **GET** /products/after/{id}.json | Retrieves Products after the given id.
*ProductsApi* | [**products_category_category_id_count_json_get**](docs/ProductsApi.md#products_category_category_id_count_json_get) | **GET** /products/category/{category_id}/count.json | Count Products filtered by category.
*ProductsApi* | [**products_category_category_id_json_get**](docs/ProductsApi.md#products_category_category_id_json_get) | **GET** /products/category/{category_id}.json | Retrieve Products filtered by category.
*ProductsApi* | [**products_count_json_get**](docs/ProductsApi.md#products_count_json_get) | **GET** /products/count.json | Count all Products.
*ProductsApi* | [**products_id_json_delete**](docs/ProductsApi.md#products_id_json_delete) | **DELETE** /products/{id}.json | Delete an existing Product.
*ProductsApi* | [**products_id_json_get**](docs/ProductsApi.md#products_id_json_get) | **GET** /products/{id}.json | Retrieve a single Product.
*ProductsApi* | [**products_id_json_put**](docs/ProductsApi.md#products_id_json_put) | **PUT** /products/{id}.json | Modify an existing Product.
*ProductsApi* | [**products_json_get**](docs/ProductsApi.md#products_json_get) | **GET** /products.json | Retrieve all Products.
*ProductsApi* | [**products_json_post**](docs/ProductsApi.md#products_json_post) | **POST** /products.json | Create a new Product.
*ProductsApi* | [**products_search_json_get**](docs/ProductsApi.md#products_search_json_get) | **GET** /products/search.json | Retrieve a Product List from a query.
*ProductsApi* | [**products_status_status_count_json_get**](docs/ProductsApi.md#products_status_status_count_json_get) | **GET** /products/status/{status}/count.json | Count Products filtered by status.
*ProductsApi* | [**products_status_status_json_get**](docs/ProductsApi.md#products_status_status_json_get) | **GET** /products/status/{status}.json | Retrieve Products filtered by status.
*PromotionsApi* | [**promotions_id_json_delete**](docs/PromotionsApi.md#promotions_id_json_delete) | **DELETE** /promotions/{id}.json | Delete an existing Promotion.
*PromotionsApi* | [**promotions_id_json_get**](docs/PromotionsApi.md#promotions_id_json_get) | **GET** /promotions/{id}.json | Retrieve a single Promotion.
*PromotionsApi* | [**promotions_id_json_put**](docs/PromotionsApi.md#promotions_id_json_put) | **PUT** /promotions/{id}.json | Update a Promotion.
*PromotionsApi* | [**promotions_json_get**](docs/PromotionsApi.md#promotions_json_get) | **GET** /promotions.json | Retrieve all Promotions.
*PromotionsApi* | [**promotions_json_post**](docs/PromotionsApi.md#promotions_json_post) | **POST** /promotions.json | Create a new Promotion.
*RegionsApi* | [**countries_country_code_regions_json_get_0**](docs/RegionsApi.md#countries_country_code_regions_json_get_0) | **GET** /countries/{country_code}/regions.json | Retrieve all Regions from a single Country.
*RegionsApi* | [**countries_country_code_regions_region_code_json_get_0**](docs/RegionsApi.md#countries_country_code_regions_region_code_json_get_0) | **GET** /countries/{country_code}/regions/{region_code}.json | Retrieve a single Region information object.
*ShippingMethodsApi* | [**shipping_methods_id_json_delete**](docs/ShippingMethodsApi.md#shipping_methods_id_json_delete) | **DELETE** /shipping_methods/{id}.json | Delete an existing Shipping Method.
*ShippingMethodsApi* | [**shipping_methods_id_json_get**](docs/ShippingMethodsApi.md#shipping_methods_id_json_get) | **GET** /shipping_methods/{id}.json | Retrieve a single Shipping Method.
*ShippingMethodsApi* | [**shipping_methods_id_json_put**](docs/ShippingMethodsApi.md#shipping_methods_id_json_put) | **PUT** /shipping_methods/{id}.json | Update a Shipping Method.
*ShippingMethodsApi* | [**shipping_methods_json_get**](docs/ShippingMethodsApi.md#shipping_methods_json_get) | **GET** /shipping_methods.json | Retrieve all Store&#39;s Shipping Methods.
*ShippingMethodsApi* | [**shipping_methods_json_post**](docs/ShippingMethodsApi.md#shipping_methods_json_post) | **POST** /shipping_methods.json | Creates a Shipping Method.
*StoresApi* | [**store_info_json_get**](docs/StoresApi.md#store_info_json_get) | **GET** /store/info.json | Retrieve Store Information.
*StoresApi* | [**store_languages_json_get**](docs/StoresApi.md#store_languages_json_get) | **GET** /store/languages.json | Retrieve Store Languages.
*TaxesApi* | [**taxes_id_json_get**](docs/TaxesApi.md#taxes_id_json_get) | **GET** /taxes/{id}.json | Retrieve a single Tax information.
*TaxesApi* | [**taxes_json_get**](docs/TaxesApi.md#taxes_json_get) | **GET** /taxes.json | Retrieve all Taxes.
*TaxesApi* | [**taxes_json_post**](docs/TaxesApi.md#taxes_json_post) | **POST** /taxes.json | Create a new Tax.


## Documentation For Models

 - [AddProductCustomField](docs/AddProductCustomField.md)
 - [AddProductCustomFieldFields](docs/AddProductCustomFieldFields.md)
 - [App](docs/App.md)
 - [AppFields](docs/AppFields.md)
 - [Attachment](docs/Attachment.md)
 - [AttachmentEdit](docs/AttachmentEdit.md)
 - [AttachmentEditFields](docs/AttachmentEditFields.md)
 - [AttachmentFields](docs/AttachmentFields.md)
 - [BadParams](docs/BadParams.md)
 - [BestSold](docs/BestSold.md)
 - [BillingAddress](docs/BillingAddress.md)
 - [Category](docs/Category.md)
 - [CategoryEdit](docs/CategoryEdit.md)
 - [CategoryEditFields](docs/CategoryEditFields.md)
 - [CategoryFields](docs/CategoryFields.md)
 - [CheckoutCustomField](docs/CheckoutCustomField.md)
 - [CheckoutCustomFieldEdit](docs/CheckoutCustomFieldEdit.md)
 - [CheckoutCustomFieldEditFields](docs/CheckoutCustomFieldEditFields.md)
 - [CheckoutCustomFieldFields](docs/CheckoutCustomFieldFields.md)
 - [Count](docs/Count.md)
 - [Country](docs/Country.md)
 - [CountryOrders](docs/CountryOrders.md)
 - [CustomField](docs/CustomField.md)
 - [CustomFieldEdit](docs/CustomFieldEdit.md)
 - [CustomFieldEditFields](docs/CustomFieldEditFields.md)
 - [CustomFieldFields](docs/CustomFieldFields.md)
 - [CustomFieldSelectOption](docs/CustomFieldSelectOption.md)
 - [CustomFieldSelectOptionEdit](docs/CustomFieldSelectOptionEdit.md)
 - [CustomFieldSelectOptionEditFields](docs/CustomFieldSelectOptionEditFields.md)
 - [CustomFieldSelectOptionFields](docs/CustomFieldSelectOptionFields.md)
 - [Customer](docs/Customer.md)
 - [CustomerAdditionalField](docs/CustomerAdditionalField.md)
 - [CustomerAdditionalFieldEdit](docs/CustomerAdditionalFieldEdit.md)
 - [CustomerAdditionalFieldEditFields](docs/CustomerAdditionalFieldEditFields.md)
 - [CustomerAdditionalFieldFields](docs/CustomerAdditionalFieldFields.md)
 - [CustomerCategory](docs/CustomerCategory.md)
 - [CustomerCategoryEdit](docs/CustomerCategoryEdit.md)
 - [CustomerCategoryEditFields](docs/CustomerCategoryEditFields.md)
 - [CustomerCategoryFields](docs/CustomerCategoryFields.md)
 - [CustomerFields](docs/CustomerFields.md)
 - [CustomerFieldsWithBillingAddressAndShippingAddressFields](docs/CustomerFieldsWithBillingAddressAndShippingAddressFields.md)
 - [CustomerFieldsWithPassword](docs/CustomerFieldsWithPassword.md)
 - [CustomerFieldsWithPasswordNoID](docs/CustomerFieldsWithPasswordNoID.md)
 - [CustomerToCustomerCategory](docs/CustomerToCustomerCategory.md)
 - [CustomerWithPassword](docs/CustomerWithPassword.md)
 - [CustomerWithPasswordNoID](docs/CustomerWithPasswordNoID.md)
 - [CustomersToCustomerCategory](docs/CustomersToCustomerCategory.md)
 - [DailyVisits](docs/DailyVisits.md)
 - [DigitalProduct](docs/DigitalProduct.md)
 - [DigitalProductEdit](docs/DigitalProductEdit.md)
 - [DigitalProductEditFields](docs/DigitalProductEditFields.md)
 - [DigitalProductFields](docs/DigitalProductFields.md)
 - [Fulfillment](docs/Fulfillment.md)
 - [FulfillmentCreate](docs/FulfillmentCreate.md)
 - [FulfillmentCreateFields](docs/FulfillmentCreateFields.md)
 - [FulfillmentEdit](docs/FulfillmentEdit.md)
 - [FulfillmentEditFields](docs/FulfillmentEditFields.md)
 - [FulfillmentFields](docs/FulfillmentFields.md)
 - [Hook](docs/Hook.md)
 - [HookEdit](docs/HookEdit.md)
 - [HookEditFields](docs/HookEditFields.md)
 - [HookFields](docs/HookFields.md)
 - [Id](docs/Id.md)
 - [Image](docs/Image.md)
 - [ImageEdit](docs/ImageEdit.md)
 - [ImageEditFields](docs/ImageEditFields.md)
 - [ImageFields](docs/ImageFields.md)
 - [JSApp](docs/JSApp.md)
 - [JSAppEdit](docs/JSAppEdit.md)
 - [Language](docs/Language.md)
 - [MessageObject](docs/MessageObject.md)
 - [NewPartnerStore](docs/NewPartnerStore.md)
 - [NewPartnerStoreStore](docs/NewPartnerStoreStore.md)
 - [NewVsReturning](docs/NewVsReturning.md)
 - [NotFound](docs/NotFound.md)
 - [Order](docs/Order.md)
 - [OrderAdditionalFields](docs/OrderAdditionalFields.md)
 - [OrderBillingAddress](docs/OrderBillingAddress.md)
 - [OrderCreate](docs/OrderCreate.md)
 - [OrderCreateFields](docs/OrderCreateFields.md)
 - [OrderEdit](docs/OrderEdit.md)
 - [OrderEditFields](docs/OrderEditFields.md)
 - [OrderFields](docs/OrderFields.md)
 - [OrderHistory](docs/OrderHistory.md)
 - [OrderHistoryEdit](docs/OrderHistoryEdit.md)
 - [OrderHistoryEditFields](docs/OrderHistoryEditFields.md)
 - [OrderHistoryFields](docs/OrderHistoryFields.md)
 - [OrderProduct](docs/OrderProduct.md)
 - [OrderProductOrderCreate](docs/OrderProductOrderCreate.md)
 - [OrderProductTax](docs/OrderProductTax.md)
 - [OrderShippingAddress](docs/OrderShippingAddress.md)
 - [OrderShippingTax](docs/OrderShippingTax.md)
 - [OrdersData](docs/OrdersData.md)
 - [Page](docs/Page.md)
 - [PageCategory](docs/PageCategory.md)
 - [PageFields](docs/PageFields.md)
 - [PageFieldsImage](docs/PageFieldsImage.md)
 - [PageModify](docs/PageModify.md)
 - [PageModifyFields](docs/PageModifyFields.md)
 - [PageTemplate](docs/PageTemplate.md)
 - [PartnerError](docs/PartnerError.md)
 - [PartnerStoreCode](docs/PartnerStoreCode.md)
 - [PartnerStoreCodeStore](docs/PartnerStoreCodeStore.md)
 - [PartnerStoreCreate](docs/PartnerStoreCreate.md)
 - [PartnerStoreStatus](docs/PartnerStoreStatus.md)
 - [PartnerStoreStatusStatus](docs/PartnerStoreStatusStatus.md)
 - [PaymentMethod](docs/PaymentMethod.md)
 - [PaymentMethodFields](docs/PaymentMethodFields.md)
 - [PaymentMethodFreq](docs/PaymentMethodFreq.md)
 - [Product](docs/Product.md)
 - [ProductCustomField](docs/ProductCustomField.md)
 - [ProductCustomFieldFields](docs/ProductCustomFieldFields.md)
 - [ProductEdit](docs/ProductEdit.md)
 - [ProductEditFields](docs/ProductEditFields.md)
 - [ProductFields](docs/ProductFields.md)
 - [ProductOption](docs/ProductOption.md)
 - [ProductOptionEdit](docs/ProductOptionEdit.md)
 - [ProductOptionEditFields](docs/ProductOptionEditFields.md)
 - [ProductOptionFields](docs/ProductOptionFields.md)
 - [ProductOptionValue](docs/ProductOptionValue.md)
 - [ProductOptionValueEdit](docs/ProductOptionValueEdit.md)
 - [ProductOptionValueEditFields](docs/ProductOptionValueEditFields.md)
 - [ProductOptionValueFields](docs/ProductOptionValueFields.md)
 - [ProductOptionVariantEdit](docs/ProductOptionVariantEdit.md)
 - [Promotion](docs/Promotion.md)
 - [PromotionEdit](docs/PromotionEdit.md)
 - [PromotionEditFields](docs/PromotionEditFields.md)
 - [PromotionFields](docs/PromotionFields.md)
 - [Referrer](docs/Referrer.md)
 - [Region](docs/Region.md)
 - [RegionOrders](docs/RegionOrders.md)
 - [ShippingAddress](docs/ShippingAddress.md)
 - [ShippingMethod](docs/ShippingMethod.md)
 - [ShippingMethodEdit](docs/ShippingMethodEdit.md)
 - [ShippingMethodEditShippingMethod](docs/ShippingMethodEditShippingMethod.md)
 - [ShippingMethodFields](docs/ShippingMethodFields.md)
 - [ShippingMethodFreq](docs/ShippingMethodFreq.md)
 - [ShippingService](docs/ShippingService.md)
 - [StatusInvalid](docs/StatusInvalid.md)
 - [Store](docs/Store.md)
 - [StoreAddress](docs/StoreAddress.md)
 - [StoreCheckStatusJsonGet200Response](docs/StoreCheckStatusJsonGet200Response.md)
 - [StoreStats](docs/StoreStats.md)
 - [StoreStatsConversions](docs/StoreStatsConversions.md)
 - [StoreStatsNewVsReturningCustomers](docs/StoreStatsNewVsReturningCustomers.md)
 - [StoreStatsOrders](docs/StoreStatsOrders.md)
 - [StoreStatsRegionOrders](docs/StoreStatsRegionOrders.md)
 - [Tax](docs/Tax.md)
 - [TaxEdit](docs/TaxEdit.md)
 - [TaxEditFields](docs/TaxEditFields.md)
 - [TaxFields](docs/TaxFields.md)
 - [TrafficSource](docs/TrafficSource.md)
 - [TrafficType](docs/TrafficType.md)
 - [Type](docs/Type.md)
 - [Variant](docs/Variant.md)
 - [VariantEdit](docs/VariantEdit.md)
 - [VariantEditFields](docs/VariantEditFields.md)
 - [VariantFields](docs/VariantFields.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.


## Author




