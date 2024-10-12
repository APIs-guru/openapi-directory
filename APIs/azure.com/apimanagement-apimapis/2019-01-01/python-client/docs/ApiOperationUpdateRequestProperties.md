# ApiOperationUpdateRequestProperties

Operation Update Contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Operation Name. | [optional] 
**method** | **str** | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | [optional] 
**url_template** | **str** | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date&#x3D;{date} | [optional] 

## Example

```python
from openapi_client.models.api_operation_update_request_properties import ApiOperationUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationUpdateRequestProperties from a JSON string
api_operation_update_request_properties_instance = ApiOperationUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ApiOperationUpdateRequestProperties.to_json())

# convert the object into a dict
api_operation_update_request_properties_dict = api_operation_update_request_properties_instance.to_dict()
# create an instance of ApiOperationUpdateRequestProperties from a dict
api_operation_update_request_properties_from_dict = ApiOperationUpdateRequestProperties.from_dict(api_operation_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


