# BackgroundCheckResultObject

Contains the details of a background check for a given entity. Background checks include Politically Exposed Person (PEP), sanctions lists, watchlists and adverse media.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_check_type** | [**EnumBackgroundCheckType**](EnumBackgroundCheckType.md) |  | [optional] 
**check_details** | [**List[KeyValuePairObject]**](KeyValuePairObject.md) | Any additional notes that may relate to the state. Free form notes that may contain JSON blobs needing further interpretation. | [optional] 
**check_frequency** | [**EnumBackgroundCheckFrequency**](EnumBackgroundCheckFrequency.md) |  | [optional] 
**check_id** | **str** | Unique identifier for every check/comparison/verification. Make sure you reference this ID whenever updating check details. This ID will also be used when pushing check results back to you. | [optional] 
**check_performed_by** | **str** | Service provider that performed the check. Basically the name of the connector, without the leading con_  | [optional] 
**check_source** | **str** | Code that can be used to determine the underlying nature or data source of the checks performed. This may or may not be known by the connector, or may be a provider specific type (e.g. type \&quot;O\&quot;)  | [optional] 
**confidence_level** | **int** | Confidence in the current results on a scale of 0 (none) to 100 (as certain as possible). Whole integers only. | [optional] 
**current_state** | [**EnumBackgroundCheckState**](EnumBackgroundCheckState.md) |  | [optional] 
**first_check_date** | **datetime** | The date and time the item was first checked. | [optional] 
**latest_check_date** | **datetime** | The date and time the item was last checked to provide this result. | [optional] 

## Example

```python
from openapi_client.models.background_check_result_object import BackgroundCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of BackgroundCheckResultObject from a JSON string
background_check_result_object_instance = BackgroundCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(BackgroundCheckResultObject.to_json())

# convert the object into a dict
background_check_result_object_dict = background_check_result_object_instance.to_dict()
# create an instance of BackgroundCheckResultObject from a dict
background_check_result_object_from_dict = BackgroundCheckResultObject.from_dict(background_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


