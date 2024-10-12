# OperationListByTags200ResponseValueInnerPropertiesOperationProperties

Operation Entity contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_name** | **str** | Api Name. | [optional] [readonly] 
**api_revision** | **str** | Api Revision. | [optional] [readonly] 
**api_version** | **str** | Api Version. | [optional] [readonly] 
**description** | **str** | Operation Description. | [optional] [readonly] 
**display_name** | **str** | Operation name. | [optional] [readonly] 
**method** | **str** | A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them. | [optional] [readonly] 
**url_template** | **str** | Relative URL template identifying the target resource for this operation. May include parameters. Example: /customers/{cid}/orders/{oid}/?date&#x3D;{date} | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_list_by_tags200_response_value_inner_properties_operation_properties import OperationListByTags200ResponseValueInnerPropertiesOperationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationListByTags200ResponseValueInnerPropertiesOperationProperties from a JSON string
operation_list_by_tags200_response_value_inner_properties_operation_properties_instance = OperationListByTags200ResponseValueInnerPropertiesOperationProperties.from_json(json)
# print the JSON string representation of the object
print(OperationListByTags200ResponseValueInnerPropertiesOperationProperties.to_json())

# convert the object into a dict
operation_list_by_tags200_response_value_inner_properties_operation_properties_dict = operation_list_by_tags200_response_value_inner_properties_operation_properties_instance.to_dict()
# create an instance of OperationListByTags200ResponseValueInnerPropertiesOperationProperties from a dict
operation_list_by_tags200_response_value_inner_properties_operation_properties_from_dict = OperationListByTags200ResponseValueInnerPropertiesOperationProperties.from_dict(operation_list_by_tags200_response_value_inner_properties_operation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


