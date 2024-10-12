# EncounteredLoginScreen

Additional details about encountered login screens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distinct_screens** | **int** | Number of encountered distinct login screens. | [optional] 
**screen_ids** | **List[str]** | Subset of login screens. | [optional] 

## Example

```python
from openapi_client.models.encountered_login_screen import EncounteredLoginScreen

# TODO update the JSON string below
json = "{}"
# create an instance of EncounteredLoginScreen from a JSON string
encountered_login_screen_instance = EncounteredLoginScreen.from_json(json)
# print the JSON string representation of the object
print(EncounteredLoginScreen.to_json())

# convert the object into a dict
encountered_login_screen_dict = encountered_login_screen_instance.to_dict()
# create an instance of EncounteredLoginScreen from a dict
encountered_login_screen_from_dict = EncounteredLoginScreen.from_dict(encountered_login_screen_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


