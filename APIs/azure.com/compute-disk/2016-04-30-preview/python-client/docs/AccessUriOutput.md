# AccessUriOutput

Azure properties, including output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output** | [**AccessUriRaw**](AccessUriRaw.md) |  | [optional] 

## Example

```python
from openapi_client.models.access_uri_output import AccessUriOutput

# TODO update the JSON string below
json = "{}"
# create an instance of AccessUriOutput from a JSON string
access_uri_output_instance = AccessUriOutput.from_json(json)
# print the JSON string representation of the object
print(AccessUriOutput.to_json())

# convert the object into a dict
access_uri_output_dict = access_uri_output_instance.to_dict()
# create an instance of AccessUriOutput from a dict
access_uri_output_from_dict = AccessUriOutput.from_dict(access_uri_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


