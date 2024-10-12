# OpenLink

A link that opens a new window.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL to open. | [optional] 

## Example

```python
from openapi_client.models.open_link import OpenLink

# TODO update the JSON string below
json = "{}"
# create an instance of OpenLink from a JSON string
open_link_instance = OpenLink.from_json(json)
# print the JSON string representation of the object
print(OpenLink.to_json())

# convert the object into a dict
open_link_dict = open_link_instance.to_dict()
# create an instance of OpenLink from a dict
open_link_from_dict = OpenLink.from_dict(open_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


