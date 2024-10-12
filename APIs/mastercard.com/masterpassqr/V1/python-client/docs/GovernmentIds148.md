# GovernmentIds148

Sender Government ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**government_id_uri** | **List[str]** | URI describing the sender government id. See &#39;Government ID URIs&#39;. | [optional] 

## Example

```python
from openapi_client.models.government_ids148 import GovernmentIds148

# TODO update the JSON string below
json = "{}"
# create an instance of GovernmentIds148 from a JSON string
government_ids148_instance = GovernmentIds148.from_json(json)
# print the JSON string representation of the object
print(GovernmentIds148.to_json())

# convert the object into a dict
government_ids148_dict = government_ids148_instance.to_dict()
# create an instance of GovernmentIds148 from a dict
government_ids148_from_dict = GovernmentIds148.from_dict(government_ids148_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


