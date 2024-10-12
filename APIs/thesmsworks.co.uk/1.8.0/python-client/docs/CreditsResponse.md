# CreditsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credits** | **float** | The number of remaining credits on your SMS Works account. Floating point number. | 

## Example

```python
from openapi_client.models.credits_response import CreditsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreditsResponse from a JSON string
credits_response_instance = CreditsResponse.from_json(json)
# print the JSON string representation of the object
print(CreditsResponse.to_json())

# convert the object into a dict
credits_response_dict = credits_response_instance.to_dict()
# create an instance of CreditsResponse from a dict
credits_response_from_dict = CreditsResponse.from_dict(credits_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


