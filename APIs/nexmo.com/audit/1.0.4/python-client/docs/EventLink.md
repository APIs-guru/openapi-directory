# EventLink

A link to this audit event object if you were to retrieve it individually.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_self** | [**EventLinkSelf**](EventLinkSelf.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_link import EventLink

# TODO update the JSON string below
json = "{}"
# create an instance of EventLink from a JSON string
event_link_instance = EventLink.from_json(json)
# print the JSON string representation of the object
print(EventLink.to_json())

# convert the object into a dict
event_link_dict = event_link_instance.to_dict()
# create an instance of EventLink from a dict
event_link_from_dict = EventLink.from_dict(event_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


