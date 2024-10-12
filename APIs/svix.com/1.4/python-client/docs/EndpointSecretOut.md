# EndpointSecretOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The endpoint&#39;s verification secret. If &#x60;null&#x60; is passed, a secret is automatically generated. Format: &#x60;base64&#x60; encoded random bytes optionally prefixed with &#x60;whsec_&#x60;. Recommended size: 24. | 

## Example

```python
from openapi_client.models.endpoint_secret_out import EndpointSecretOut

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointSecretOut from a JSON string
endpoint_secret_out_instance = EndpointSecretOut.from_json(json)
# print the JSON string representation of the object
print(EndpointSecretOut.to_json())

# convert the object into a dict
endpoint_secret_out_dict = endpoint_secret_out_instance.to_dict()
# create an instance of EndpointSecretOut from a dict
endpoint_secret_out_from_dict = EndpointSecretOut.from_dict(endpoint_secret_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


