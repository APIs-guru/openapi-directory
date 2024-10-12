# BetaTesterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaTester**](BetaTester.md) |  | 
**included** | [**List[BetaTesterResponseIncludedInner]**](BetaTesterResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.beta_tester_response import BetaTesterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterResponse from a JSON string
beta_tester_response_instance = BetaTesterResponse.from_json(json)
# print the JSON string representation of the object
print(BetaTesterResponse.to_json())

# convert the object into a dict
beta_tester_response_dict = beta_tester_response_instance.to_dict()
# create an instance of BetaTesterResponse from a dict
beta_tester_response_from_dict = BetaTesterResponse.from_dict(beta_tester_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


