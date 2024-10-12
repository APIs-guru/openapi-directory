# ListProductCertificationsResponse

Response for ListProductCertifications method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**product_certifications** | [**List[ProductCertification]**](ProductCertification.md) | The product certifications from the specified certification body. | [optional] 

## Example

```python
from openapi_client.models.list_product_certifications_response import ListProductCertificationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProductCertificationsResponse from a JSON string
list_product_certifications_response_instance = ListProductCertificationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListProductCertificationsResponse.to_json())

# convert the object into a dict
list_product_certifications_response_dict = list_product_certifications_response_instance.to_dict()
# create an instance of ListProductCertificationsResponse from a dict
list_product_certifications_response_from_dict = ListProductCertificationsResponse.from_dict(list_product_certifications_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


