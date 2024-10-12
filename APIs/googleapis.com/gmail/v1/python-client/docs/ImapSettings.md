# ImapSettings

IMAP settings for an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_expunge** | **bool** | If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted. | [optional] 
**enabled** | **bool** | Whether IMAP is enabled for the account. | [optional] 
**expunge_behavior** | **str** | The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder. | [optional] 
**max_folder_size** | **int** | An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit. | [optional] 

## Example

```python
from openapi_client.models.imap_settings import ImapSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ImapSettings from a JSON string
imap_settings_instance = ImapSettings.from_json(json)
# print the JSON string representation of the object
print(ImapSettings.to_json())

# convert the object into a dict
imap_settings_dict = imap_settings_instance.to_dict()
# create an instance of ImapSettings from a dict
imap_settings_from_dict = ImapSettings.from_dict(imap_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


