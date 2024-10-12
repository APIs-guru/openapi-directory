# Licenses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[ListAllLicenses200ResponseResultsInner]**](ListAllLicenses200ResponseResultsInner.md) | A list of licenses | 
**total** | **float** | The number of results returned | [optional] 

## Example

```python
from openapi_client.models.licenses import Licenses

# TODO update the JSON string below
json = "{}"
# create an instance of Licenses from a JSON string
licenses_instance = Licenses.from_json(json)
# print the JSON string representation of the object
print(Licenses.to_json())

# convert the object into a dict
licenses_dict = licenses_instance.to_dict()
# create an instance of Licenses from a dict
licenses_from_dict = Licenses.from_dict(licenses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


