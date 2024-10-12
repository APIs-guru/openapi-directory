# AlertDetails

A type that contains the alert detail fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect** | [**Aspect**](Aspect.md) |  | [optional] 
**dimension** | [**AlertDimension**](AlertDimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.alert_details import AlertDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AlertDetails from a JSON string
alert_details_instance = AlertDetails.from_json(json)
# print the JSON string representation of the object
print(AlertDetails.to_json())

# convert the object into a dict
alert_details_dict = alert_details_instance.to_dict()
# create an instance of AlertDetails from a dict
alert_details_from_dict = AlertDetails.from_dict(alert_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


