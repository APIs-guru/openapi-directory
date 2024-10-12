# InstancesSuggestRequest

Request to get search string suggestions for time series instances search based on prefix text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_string** | **str** | Search string for which suggestions are required. Empty is allowed, but not null. | 
**take** | **int** | Maximum number of suggestions expected in the result. Defaults to 10 when not set. | [optional] 

## Example

```python
from openapi_client.models.instances_suggest_request import InstancesSuggestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesSuggestRequest from a JSON string
instances_suggest_request_instance = InstancesSuggestRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesSuggestRequest.to_json())

# convert the object into a dict
instances_suggest_request_dict = instances_suggest_request_instance.to_dict()
# create an instance of InstancesSuggestRequest from a dict
instances_suggest_request_from_dict = InstancesSuggestRequest.from_dict(instances_suggest_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


