# NotifierMetadata

NotifierMetadata contains the data which can be used to reference or describe this notifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The human-readable and user-given name for the notifier. For example: \&quot;repo-merge-email-notifier\&quot;. | [optional] 
**notifier** | **str** | The string representing the name and version of notifier to deploy. Expected to be of the form of \&quot;/:\&quot;. For example: \&quot;gcr.io/my-project/notifiers/smtp:1.2.34\&quot;. | [optional] 

## Example

```python
from openapi_client.models.notifier_metadata import NotifierMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of NotifierMetadata from a JSON string
notifier_metadata_instance = NotifierMetadata.from_json(json)
# print the JSON string representation of the object
print(NotifierMetadata.to_json())

# convert the object into a dict
notifier_metadata_dict = notifier_metadata_instance.to_dict()
# create an instance of NotifierMetadata from a dict
notifier_metadata_from_dict = NotifierMetadata.from_dict(notifier_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


