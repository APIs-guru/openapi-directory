# GovernmentIds133

Sender Government ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**government_id_uri** | **List[str]** | URI describing the sender government id. See &#39;Government ID URIs&#39;. | [optional] 

## Example

```python
from openapi_client.models.government_ids133 import GovernmentIds133

# TODO update the JSON string below
json = "{}"
# create an instance of GovernmentIds133 from a JSON string
government_ids133_instance = GovernmentIds133.from_json(json)
# print the JSON string representation of the object
print(GovernmentIds133.to_json())

# convert the object into a dict
government_ids133_dict = government_ids133_instance.to_dict()
# create an instance of GovernmentIds133 from a dict
government_ids133_from_dict = GovernmentIds133.from_dict(government_ids133_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


