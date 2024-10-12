# coding: utf-8

# flake8: noqa

"""
    Jumpseller API

    # Endpoint Structure  All URLs are in the format:   ```text https://api.jumpseller.com/v1/path.json?login=XXXXXX&authtoken=storetoken   ```  The path is prefixed by the API version and the URL takes as parameters the login (your store specific API login) and your authentication token. <br/><br/> ***  # Version  The current version of the API is **v1**.   If we change the API in backward-incompatible ways, we'll increase the version number and maintain stable support for the old urls. <br/><br/> ***  # Authentication  The API uses a token-based authentication with a combination of a login key and an auth token. **Both parameters can be found on the left sidebar of the Account section, accessed from the main menu of your Admin Panel**. The auth token of the user can be reset on the same page.  ![Store Login](/images/support/api/apilogin.png)  The auth token is a **32 characters** string.  If you are developing a Jumpseller App, the authentication should be done using [OAuth-2](/support/oauth-2). Please read the article [Build an App](/support/apps) for more information. <br/><br/> ***  # Curl Examples  To request all the products at your store, you would append the products index path to the base url to create an URL with the format:    ```text https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX ```  In curl, you can invoque that URL with:    ```text curl -X GET \"https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX\" ```  To create a product, you will include the JSON data and specify the MIME Type:    ```text curl -X POST -d '{ \"product\" : {\"name\": \"My new Product!\", \"price\": 100} }' \"https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ```  and to update the product identified with 123:    ```text curl -X PUT -d '{ \"product\" : {\"name\": \"My updated Product!\", \"price\": 99} }' \"https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ```  or delete it:    ```text curl -X DELETE \"https://api.jumpseller.com/v1/products/123.json?login=XXXXXX&authtoken=XXXXX\" -H \"Content-Type:application/json\" ``` <br/><br/> ***  # PHP Examples  Create a new Product (POST method)  ```php $url = 'https://api.jumpseller.com/v1/products.json?login=XXXXX&authtoken=XXXXX; $ch = curl_init($url); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, \"POST\"); //post method curl_setopt($ch, CURLOPT_POSTFIELDS, '{ \"product\" : {\"name\": \"My updated Product!\", \"price\": 99} }');  $result = curl_exec($ch); print_r($result); curl_close($ch); ``` <br/><br/> ***  # Plain JSON only. No XML.  * We only support JSON for data serialization. * Our node format has no root element.   * We use snake_case to describe attribute keys (like \"created_at\").   * All empty value are replaced with **null** strings. * All API URLs end in .json to indicate that they accept and return JSON. * POST and PUT methods require you to explicitly state the MIME type of your request's body content as **\"application/json\"**. <br/><br/> ***  # Rate Limit You can perform a maximum of:  + 240 (two hundred forty) requests per minute and + 8 (eight) requests per second   If you exceed this limit, you'll get a 403 Forbidden (Rate Limit Exceeded) response for subsequent requests.    The rate limits apply by IP address and by store. This means that multiple requests on different stores are not counted towards the same rate limit.  This limits are necessary to ensure resources are correctly used. Your application should be aware of this limits and retry any unsuccessful request, check the following Ruby stub:  ```ruby tries = 0; max_tries = 3; begin   HTTParty.send(method, uri) # perform an API call.   sleep 0.5   tries += 1 rescue   unless tries >= max_tries     sleep 1.0 # wait the necessary time before retrying the call again.     retry   end end ```  Finally, you can review the Response Headers of each request:  ```text Jumpseller-PerMinuteRateLimit-Limit: 60   Jumpseller-PerMinuteRateLimit-Remaining: 59 # requests available on the per-second interval   Jumpseller-PerSecondRateLimit-Limit: 2   Jumpseller-PerSecondRateLimit-Remaining: 1 # requests available on the per-second interval ```   to better model your application requests intervals.  In the event of getting your IP banned, the Response Header `Jumpseller-BannedByRateLimit-Reset` informs you the time when will your ban be reseted. <br/><br/> ***  # Pagination  By default we will return 50 objects (products, orders, etc) per page. There is a maximum of 100, using a query string `&limit=100`. If the result set gets paginated it is your responsibility to check the next page for more objects -- you do this by using query strings `&page=2`, `&page=3` and so on.  ```text https://api.jumpseller.com/v1/products.json?login=XXXXXX&authtoken=XXXXX&page=3&limit=100 ``` <br/><br/> ***  # More * [Jumpseller API wrapper](https://gitlab.com/jumpseller-api/ruby) provides a public Ruby abstraction over our API; * [Apps Page](/apps) showcases external integrations with Jumpseller done by technical experts; * [Imgbb API](https://api.imgbb.com/) provides an easy way to upload and temporaly host for images and files. <br/><br/> *** <br/><br/> 

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


__version__ = "1.0.0"

# import apis into sdk package
from openapi_client.api.apps_api import AppsApi
from openapi_client.api.categories_api import CategoriesApi
from openapi_client.api.checkout_custom_fields_api import CheckoutCustomFieldsApi
from openapi_client.api.countries_api import CountriesApi
from openapi_client.api.custom_field_select_options_api import CustomFieldSelectOptionsApi
from openapi_client.api.custom_fields_api import CustomFieldsApi
from openapi_client.api.customer_additional_fields_api import CustomerAdditionalFieldsApi
from openapi_client.api.customer_categories_api import CustomerCategoriesApi
from openapi_client.api.customers_api import CustomersApi
from openapi_client.api.fulfillments_api import FulfillmentsApi
from openapi_client.api.hooks_api import HooksApi
from openapi_client.api.orders_api import OrdersApi
from openapi_client.api.pages_api import PagesApi
from openapi_client.api.partners_api import PartnersApi
from openapi_client.api.payment_methods_api import PaymentMethodsApi
from openapi_client.api.product_attachments_api import ProductAttachmentsApi
from openapi_client.api.product_custom_fields_api import ProductCustomFieldsApi
from openapi_client.api.product_digital_products_api import ProductDigitalProductsApi
from openapi_client.api.product_images_api import ProductImagesApi
from openapi_client.api.product_option_values_api import ProductOptionValuesApi
from openapi_client.api.product_options_api import ProductOptionsApi
from openapi_client.api.product_variants_api import ProductVariantsApi
from openapi_client.api.products_api import ProductsApi
from openapi_client.api.promotions_api import PromotionsApi
from openapi_client.api.regions_api import RegionsApi
from openapi_client.api.shipping_methods_api import ShippingMethodsApi
from openapi_client.api.stores_api import StoresApi
from openapi_client.api.taxes_api import TaxesApi

# import ApiClient
from openapi_client.api_response import ApiResponse
from openapi_client.api_client import ApiClient
from openapi_client.configuration import Configuration
from openapi_client.exceptions import OpenApiException
from openapi_client.exceptions import ApiTypeError
from openapi_client.exceptions import ApiValueError
from openapi_client.exceptions import ApiKeyError
from openapi_client.exceptions import ApiAttributeError
from openapi_client.exceptions import ApiException

# import models into sdk package
from openapi_client.models.add_product_custom_field import AddProductCustomField
from openapi_client.models.add_product_custom_field_fields import AddProductCustomFieldFields
from openapi_client.models.app import App
from openapi_client.models.app_fields import AppFields
from openapi_client.models.attachment import Attachment
from openapi_client.models.attachment_edit import AttachmentEdit
from openapi_client.models.attachment_edit_fields import AttachmentEditFields
from openapi_client.models.attachment_fields import AttachmentFields
from openapi_client.models.bad_params import BadParams
from openapi_client.models.best_sold import BestSold
from openapi_client.models.billing_address import BillingAddress
from openapi_client.models.category import Category
from openapi_client.models.category_edit import CategoryEdit
from openapi_client.models.category_edit_fields import CategoryEditFields
from openapi_client.models.category_fields import CategoryFields
from openapi_client.models.checkout_custom_field import CheckoutCustomField
from openapi_client.models.checkout_custom_field_edit import CheckoutCustomFieldEdit
from openapi_client.models.checkout_custom_field_edit_fields import CheckoutCustomFieldEditFields
from openapi_client.models.checkout_custom_field_fields import CheckoutCustomFieldFields
from openapi_client.models.count import Count
from openapi_client.models.country import Country
from openapi_client.models.country_orders import CountryOrders
from openapi_client.models.custom_field import CustomField
from openapi_client.models.custom_field_edit import CustomFieldEdit
from openapi_client.models.custom_field_edit_fields import CustomFieldEditFields
from openapi_client.models.custom_field_fields import CustomFieldFields
from openapi_client.models.custom_field_select_option import CustomFieldSelectOption
from openapi_client.models.custom_field_select_option_edit import CustomFieldSelectOptionEdit
from openapi_client.models.custom_field_select_option_edit_fields import CustomFieldSelectOptionEditFields
from openapi_client.models.custom_field_select_option_fields import CustomFieldSelectOptionFields
from openapi_client.models.customer import Customer
from openapi_client.models.customer_additional_field import CustomerAdditionalField
from openapi_client.models.customer_additional_field_edit import CustomerAdditionalFieldEdit
from openapi_client.models.customer_additional_field_edit_fields import CustomerAdditionalFieldEditFields
from openapi_client.models.customer_additional_field_fields import CustomerAdditionalFieldFields
from openapi_client.models.customer_category import CustomerCategory
from openapi_client.models.customer_category_edit import CustomerCategoryEdit
from openapi_client.models.customer_category_edit_fields import CustomerCategoryEditFields
from openapi_client.models.customer_category_fields import CustomerCategoryFields
from openapi_client.models.customer_fields import CustomerFields
from openapi_client.models.customer_fields_with_billing_address_and_shipping_address_fields import CustomerFieldsWithBillingAddressAndShippingAddressFields
from openapi_client.models.customer_fields_with_password import CustomerFieldsWithPassword
from openapi_client.models.customer_fields_with_password_no_id import CustomerFieldsWithPasswordNoID
from openapi_client.models.customer_to_customer_category import CustomerToCustomerCategory
from openapi_client.models.customer_with_password import CustomerWithPassword
from openapi_client.models.customer_with_password_no_id import CustomerWithPasswordNoID
from openapi_client.models.customers_to_customer_category import CustomersToCustomerCategory
from openapi_client.models.daily_visits import DailyVisits
from openapi_client.models.digital_product import DigitalProduct
from openapi_client.models.digital_product_edit import DigitalProductEdit
from openapi_client.models.digital_product_edit_fields import DigitalProductEditFields
from openapi_client.models.digital_product_fields import DigitalProductFields
from openapi_client.models.fulfillment import Fulfillment
from openapi_client.models.fulfillment_create import FulfillmentCreate
from openapi_client.models.fulfillment_create_fields import FulfillmentCreateFields
from openapi_client.models.fulfillment_edit import FulfillmentEdit
from openapi_client.models.fulfillment_edit_fields import FulfillmentEditFields
from openapi_client.models.fulfillment_fields import FulfillmentFields
from openapi_client.models.hook import Hook
from openapi_client.models.hook_edit import HookEdit
from openapi_client.models.hook_edit_fields import HookEditFields
from openapi_client.models.hook_fields import HookFields
from openapi_client.models.id import Id
from openapi_client.models.image import Image
from openapi_client.models.image_edit import ImageEdit
from openapi_client.models.image_edit_fields import ImageEditFields
from openapi_client.models.image_fields import ImageFields
from openapi_client.models.js_app import JSApp
from openapi_client.models.js_app_edit import JSAppEdit
from openapi_client.models.language import Language
from openapi_client.models.message_object import MessageObject
from openapi_client.models.new_partner_store import NewPartnerStore
from openapi_client.models.new_partner_store_store import NewPartnerStoreStore
from openapi_client.models.new_vs_returning import NewVsReturning
from openapi_client.models.not_found import NotFound
from openapi_client.models.order import Order
from openapi_client.models.order_additional_fields import OrderAdditionalFields
from openapi_client.models.order_billing_address import OrderBillingAddress
from openapi_client.models.order_create import OrderCreate
from openapi_client.models.order_create_fields import OrderCreateFields
from openapi_client.models.order_edit import OrderEdit
from openapi_client.models.order_edit_fields import OrderEditFields
from openapi_client.models.order_fields import OrderFields
from openapi_client.models.order_history import OrderHistory
from openapi_client.models.order_history_edit import OrderHistoryEdit
from openapi_client.models.order_history_edit_fields import OrderHistoryEditFields
from openapi_client.models.order_history_fields import OrderHistoryFields
from openapi_client.models.order_product import OrderProduct
from openapi_client.models.order_product_order_create import OrderProductOrderCreate
from openapi_client.models.order_product_tax import OrderProductTax
from openapi_client.models.order_shipping_address import OrderShippingAddress
from openapi_client.models.order_shipping_tax import OrderShippingTax
from openapi_client.models.orders_data import OrdersData
from openapi_client.models.page import Page
from openapi_client.models.page_category import PageCategory
from openapi_client.models.page_fields import PageFields
from openapi_client.models.page_fields_image import PageFieldsImage
from openapi_client.models.page_modify import PageModify
from openapi_client.models.page_modify_fields import PageModifyFields
from openapi_client.models.page_template import PageTemplate
from openapi_client.models.partner_error import PartnerError
from openapi_client.models.partner_store_code import PartnerStoreCode
from openapi_client.models.partner_store_code_store import PartnerStoreCodeStore
from openapi_client.models.partner_store_create import PartnerStoreCreate
from openapi_client.models.partner_store_status import PartnerStoreStatus
from openapi_client.models.partner_store_status_status import PartnerStoreStatusStatus
from openapi_client.models.payment_method import PaymentMethod
from openapi_client.models.payment_method_fields import PaymentMethodFields
from openapi_client.models.payment_method_freq import PaymentMethodFreq
from openapi_client.models.product import Product
from openapi_client.models.product_custom_field import ProductCustomField
from openapi_client.models.product_custom_field_fields import ProductCustomFieldFields
from openapi_client.models.product_edit import ProductEdit
from openapi_client.models.product_edit_fields import ProductEditFields
from openapi_client.models.product_fields import ProductFields
from openapi_client.models.product_option import ProductOption
from openapi_client.models.product_option_edit import ProductOptionEdit
from openapi_client.models.product_option_edit_fields import ProductOptionEditFields
from openapi_client.models.product_option_fields import ProductOptionFields
from openapi_client.models.product_option_value import ProductOptionValue
from openapi_client.models.product_option_value_edit import ProductOptionValueEdit
from openapi_client.models.product_option_value_edit_fields import ProductOptionValueEditFields
from openapi_client.models.product_option_value_fields import ProductOptionValueFields
from openapi_client.models.product_option_variant_edit import ProductOptionVariantEdit
from openapi_client.models.promotion import Promotion
from openapi_client.models.promotion_edit import PromotionEdit
from openapi_client.models.promotion_edit_fields import PromotionEditFields
from openapi_client.models.promotion_fields import PromotionFields
from openapi_client.models.referrer import Referrer
from openapi_client.models.region import Region
from openapi_client.models.region_orders import RegionOrders
from openapi_client.models.shipping_address import ShippingAddress
from openapi_client.models.shipping_method import ShippingMethod
from openapi_client.models.shipping_method_edit import ShippingMethodEdit
from openapi_client.models.shipping_method_edit_shipping_method import ShippingMethodEditShippingMethod
from openapi_client.models.shipping_method_fields import ShippingMethodFields
from openapi_client.models.shipping_method_freq import ShippingMethodFreq
from openapi_client.models.shipping_service import ShippingService
from openapi_client.models.status_invalid import StatusInvalid
from openapi_client.models.store import Store
from openapi_client.models.store_address import StoreAddress
from openapi_client.models.store_check_status_json_get200_response import StoreCheckStatusJsonGet200Response
from openapi_client.models.store_stats import StoreStats
from openapi_client.models.store_stats_conversions import StoreStatsConversions
from openapi_client.models.store_stats_new_vs_returning_customers import StoreStatsNewVsReturningCustomers
from openapi_client.models.store_stats_orders import StoreStatsOrders
from openapi_client.models.store_stats_region_orders import StoreStatsRegionOrders
from openapi_client.models.tax import Tax
from openapi_client.models.tax_edit import TaxEdit
from openapi_client.models.tax_edit_fields import TaxEditFields
from openapi_client.models.tax_fields import TaxFields
from openapi_client.models.traffic_source import TrafficSource
from openapi_client.models.traffic_type import TrafficType
from openapi_client.models.type import Type
from openapi_client.models.variant import Variant
from openapi_client.models.variant_edit import VariantEdit
from openapi_client.models.variant_edit_fields import VariantEditFields
from openapi_client.models.variant_fields import VariantFields
