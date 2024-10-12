# VersionMoveBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **str** | The URL (self link) of the version after which to place the moved version. Cannot be used with &#x60;position&#x60;. | [optional] 
**position** | **str** | An absolute position in which to place the moved version. Cannot be used with &#x60;after&#x60;. | [optional] 

## Example

```python
from openapi_client.models.version_move_bean import VersionMoveBean

# TODO update the JSON string below
json = "{}"
# create an instance of VersionMoveBean from a JSON string
version_move_bean_instance = VersionMoveBean.from_json(json)
# print the JSON string representation of the object
print(VersionMoveBean.to_json())

# convert the object into a dict
version_move_bean_dict = version_move_bean_instance.to_dict()
# create an instance of VersionMoveBean from a dict
version_move_bean_from_dict = VersionMoveBean.from_dict(version_move_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


