# GovernmentIds122

Government id’s may be required in certain markets like LAC region and also by certain Networks. The partner must provide where applicable else there is a potential for the transaction to be rejected. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**government_id_uri** | **List[str]** | URI describing the government id. [see Government ID URIs] | [optional] 

## Example

```python
from openapi_client.models.government_ids122 import GovernmentIds122

# TODO update the JSON string below
json = "{}"
# create an instance of GovernmentIds122 from a JSON string
government_ids122_instance = GovernmentIds122.from_json(json)
# print the JSON string representation of the object
print(GovernmentIds122.to_json())

# convert the object into a dict
government_ids122_dict = government_ids122_instance.to_dict()
# create an instance of GovernmentIds122 from a dict
government_ids122_from_dict = GovernmentIds122.from_dict(government_ids122_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


