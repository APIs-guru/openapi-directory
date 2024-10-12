# AlertErrorDetails

Error details for the alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Error code. | [optional] 
**error_message** | **str** | Error Message | [optional] 
**occurences** | **int** | Number of occurrences. | [optional] 

## Example

```python
from openapi_client.models.alert_error_details import AlertErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AlertErrorDetails from a JSON string
alert_error_details_instance = AlertErrorDetails.from_json(json)
# print the JSON string representation of the object
print(AlertErrorDetails.to_json())

# convert the object into a dict
alert_error_details_dict = alert_error_details_instance.to_dict()
# create an instance of AlertErrorDetails from a dict
alert_error_details_from_dict = AlertErrorDetails.from_dict(alert_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


