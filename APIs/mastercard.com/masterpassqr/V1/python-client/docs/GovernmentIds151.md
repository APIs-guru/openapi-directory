# GovernmentIds151

Recipient Government ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**government_id_uri** | **List[str]** | URI describing the recipient government id. See &#39;Government ID URIs&#39;. | [optional] 

## Example

```python
from openapi_client.models.government_ids151 import GovernmentIds151

# TODO update the JSON string below
json = "{}"
# create an instance of GovernmentIds151 from a JSON string
government_ids151_instance = GovernmentIds151.from_json(json)
# print the JSON string representation of the object
print(GovernmentIds151.to_json())

# convert the object into a dict
government_ids151_dict = government_ids151_instance.to_dict()
# create an instance of GovernmentIds151 from a dict
government_ids151_from_dict = GovernmentIds151.from_dict(government_ids151_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


