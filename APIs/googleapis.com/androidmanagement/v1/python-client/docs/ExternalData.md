# ExternalData

Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha256_hash** | **str** | The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn&#39;t match this hash, Android Device Policy won&#39;t use the data. | [optional] 
**url** | **str** | The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn&#39;t provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL. | [optional] 

## Example

```python
from openapi_client.models.external_data import ExternalData

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalData from a JSON string
external_data_instance = ExternalData.from_json(json)
# print the JSON string representation of the object
print(ExternalData.to_json())

# convert the object into a dict
external_data_dict = external_data_instance.to_dict()
# create an instance of ExternalData from a dict
external_data_from_dict = ExternalData.from_dict(external_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


