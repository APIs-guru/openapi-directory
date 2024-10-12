# GHError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hints** | [**List[GHErrorHintsInner]**](GHErrorHintsInner.md) | Optional error information. | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.gh_error import GHError

# TODO update the JSON string below
json = "{}"
# create an instance of GHError from a JSON string
gh_error_instance = GHError.from_json(json)
# print the JSON string representation of the object
print(GHError.to_json())

# convert the object into a dict
gh_error_dict = gh_error_instance.to_dict()
# create an instance of GHError from a dict
gh_error_from_dict = GHError.from_dict(gh_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


