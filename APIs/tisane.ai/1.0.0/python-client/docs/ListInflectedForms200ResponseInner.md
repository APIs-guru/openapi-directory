# ListInflectedForms200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[ListInflectedForms200ResponseInnerFeaturesInner]**](ListInflectedForms200ResponseInnerFeaturesInner.md) |  | [optional] 
**is_lemma** | **bool** |  | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_inflected_forms200_response_inner import ListInflectedForms200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of ListInflectedForms200ResponseInner from a JSON string
list_inflected_forms200_response_inner_instance = ListInflectedForms200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(ListInflectedForms200ResponseInner.to_json())

# convert the object into a dict
list_inflected_forms200_response_inner_dict = list_inflected_forms200_response_inner_instance.to_dict()
# create an instance of ListInflectedForms200ResponseInner from a dict
list_inflected_forms200_response_inner_from_dict = ListInflectedForms200ResponseInner.from_dict(list_inflected_forms200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


