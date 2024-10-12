# AccessUri

A disk access SAS uri.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_sas** | **str** | A SAS uri for accessing a disk. | [optional] [readonly] 

## Example

```python
from openapi_client.models.access_uri import AccessUri

# TODO update the JSON string below
json = "{}"
# create an instance of AccessUri from a JSON string
access_uri_instance = AccessUri.from_json(json)
# print the JSON string representation of the object
print(AccessUri.to_json())

# convert the object into a dict
access_uri_dict = access_uri_instance.to_dict()
# create an instance of AccessUri from a dict
access_uri_from_dict = AccessUri.from_dict(access_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


