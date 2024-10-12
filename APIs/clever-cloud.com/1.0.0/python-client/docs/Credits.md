# Credits


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **float** |  | 
**drop_price** | [**CreditsDropPrice**](CreditsDropPrice.md) |  | 
**owner_id** | **str** |  | 

## Example

```python
from openapi_client.models.credits import Credits

# TODO update the JSON string below
json = "{}"
# create an instance of Credits from a JSON string
credits_instance = Credits.from_json(json)
# print the JSON string representation of the object
print(Credits.to_json())

# convert the object into a dict
credits_dict = credits_instance.to_dict()
# create an instance of Credits from a dict
credits_from_dict = Credits.from_dict(credits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


