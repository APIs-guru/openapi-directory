# Constraints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_explicit_content** | **bool** |  | [optional] [default to True]
**maximum_queue_segment_item_count** | **int** |  | [optional] [default to 1000]
**update_user_taste_profile** | **bool** |  | [optional] [default to True]

## Example

```python
from openapi_client.models.constraints import Constraints

# TODO update the JSON string below
json = "{}"
# create an instance of Constraints from a JSON string
constraints_instance = Constraints.from_json(json)
# print the JSON string representation of the object
print(Constraints.to_json())

# convert the object into a dict
constraints_dict = constraints_instance.to_dict()
# create an instance of Constraints from a dict
constraints_from_dict = Constraints.from_dict(constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


