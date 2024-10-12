# EmailHistoryResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | Address email was sent to. | [optional] 
**email_type** | **str** | Type of email. | [optional] 
**send_time** | **str** | Time email was sent. | [optional] 
**status_times** | [**EmailHistoryResourceAttributesStatusTimes**](EmailHistoryResourceAttributesStatusTimes.md) |  | [optional] 
**twine_email_id** | **str** | Unique identifier for this email. | [optional] 

## Example

```python
from openapi_client.models.email_history_resource_attributes import EmailHistoryResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of EmailHistoryResourceAttributes from a JSON string
email_history_resource_attributes_instance = EmailHistoryResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(EmailHistoryResourceAttributes.to_json())

# convert the object into a dict
email_history_resource_attributes_dict = email_history_resource_attributes_instance.to_dict()
# create an instance of EmailHistoryResourceAttributes from a dict
email_history_resource_attributes_from_dict = EmailHistoryResourceAttributes.from_dict(email_history_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


