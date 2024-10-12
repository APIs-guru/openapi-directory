# ApiOperationListByApi200ResponseValueInnerProperties

Operation Contract Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Operation Name. | 
**method** | **str** | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | 
**url_template** | **str** | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date&#x3D;{date} | 

## Example

```python
from openapi_client.models.api_operation_list_by_api200_response_value_inner_properties import ApiOperationListByApi200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationListByApi200ResponseValueInnerProperties from a JSON string
api_operation_list_by_api200_response_value_inner_properties_instance = ApiOperationListByApi200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiOperationListByApi200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_operation_list_by_api200_response_value_inner_properties_dict = api_operation_list_by_api200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiOperationListByApi200ResponseValueInnerProperties from a dict
api_operation_list_by_api200_response_value_inner_properties_from_dict = ApiOperationListByApi200ResponseValueInnerProperties.from_dict(api_operation_list_by_api200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


