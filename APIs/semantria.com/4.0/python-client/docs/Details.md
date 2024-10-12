# Details


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_imperative** | **bool** | Represents whether sentence (group of words) is imperative or not | 
**is_polar** | **bool** | Represents whether or not sentence content contains sentiment polarity | 
**words** | [**List[Word]**](Word.md) | Returns list of words grouped by the parent sentence | 

## Example

```python
from openapi_client.models.details import Details

# TODO update the JSON string below
json = "{}"
# create an instance of Details from a JSON string
details_instance = Details.from_json(json)
# print the JSON string representation of the object
print(Details.to_json())

# convert the object into a dict
details_dict = details_instance.to_dict()
# create an instance of Details from a dict
details_from_dict = Details.from_dict(details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


