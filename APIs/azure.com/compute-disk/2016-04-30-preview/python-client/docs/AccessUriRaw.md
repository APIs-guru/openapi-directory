# AccessUriRaw

This object gets 'bubbled up' through flattening.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_sas** | **str** | A SAS uri for accessing a disk. | [optional] [readonly] 

## Example

```python
from openapi_client.models.access_uri_raw import AccessUriRaw

# TODO update the JSON string below
json = "{}"
# create an instance of AccessUriRaw from a JSON string
access_uri_raw_instance = AccessUriRaw.from_json(json)
# print the JSON string representation of the object
print(AccessUriRaw.to_json())

# convert the object into a dict
access_uri_raw_dict = access_uri_raw_instance.to_dict()
# create an instance of AccessUriRaw from a dict
access_uri_raw_from_dict = AccessUriRaw.from_dict(access_uri_raw_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


