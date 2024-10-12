# ExplainUrl



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explain** | **object** |  | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**project** | **str** |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.explain_url import ExplainUrl

# TODO update the JSON string below
json = "{}"
# create an instance of ExplainUrl from a JSON string
explain_url_instance = ExplainUrl.from_json(json)
# print the JSON string representation of the object
print(ExplainUrl.to_json())

# convert the object into a dict
explain_url_dict = explain_url_instance.to_dict()
# create an instance of ExplainUrl from a dict
explain_url_from_dict = ExplainUrl.from_dict(explain_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


