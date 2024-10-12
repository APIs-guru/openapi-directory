# IdOrKeyBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the referenced item. | [optional] 
**key** | **str** | The key of the referenced item. | [optional] 

## Example

```python
from openapi_client.models.id_or_key_bean import IdOrKeyBean

# TODO update the JSON string below
json = "{}"
# create an instance of IdOrKeyBean from a JSON string
id_or_key_bean_instance = IdOrKeyBean.from_json(json)
# print the JSON string representation of the object
print(IdOrKeyBean.to_json())

# convert the object into a dict
id_or_key_bean_dict = id_or_key_bean_instance.to_dict()
# create an instance of IdOrKeyBean from a dict
id_or_key_bean_from_dict = IdOrKeyBean.from_dict(id_or_key_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


