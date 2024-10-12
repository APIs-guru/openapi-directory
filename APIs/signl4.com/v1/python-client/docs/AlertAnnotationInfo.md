# AlertAnnotationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_type** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.alert_annotation_info import AlertAnnotationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AlertAnnotationInfo from a JSON string
alert_annotation_info_instance = AlertAnnotationInfo.from_json(json)
# print the JSON string representation of the object
print(AlertAnnotationInfo.to_json())

# convert the object into a dict
alert_annotation_info_dict = alert_annotation_info_instance.to_dict()
# create an instance of AlertAnnotationInfo from a dict
alert_annotation_info_from_dict = AlertAnnotationInfo.from_dict(alert_annotation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


