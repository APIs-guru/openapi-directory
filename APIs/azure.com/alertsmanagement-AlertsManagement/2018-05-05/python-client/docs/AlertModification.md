# AlertModification

Alert Modification details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AlertModificationProperties**](AlertModificationProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_modification import AlertModification

# TODO update the JSON string below
json = "{}"
# create an instance of AlertModification from a JSON string
alert_modification_instance = AlertModification.from_json(json)
# print the JSON string representation of the object
print(AlertModification.to_json())

# convert the object into a dict
alert_modification_dict = alert_modification_instance.to_dict()
# create an instance of AlertModification from a dict
alert_modification_from_dict = AlertModification.from_dict(alert_modification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


