# ProductstatusesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#productstatusesListResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of products statuses. | [optional] 
**resources** | [**List[ProductStatus]**](ProductStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.productstatuses_list_response import ProductstatusesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductstatusesListResponse from a JSON string
productstatuses_list_response_instance = ProductstatusesListResponse.from_json(json)
# print the JSON string representation of the object
print(ProductstatusesListResponse.to_json())

# convert the object into a dict
productstatuses_list_response_dict = productstatuses_list_response_instance.to_dict()
# create an instance of ProductstatusesListResponse from a dict
productstatuses_list_response_from_dict = ProductstatusesListResponse.from_dict(productstatuses_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


