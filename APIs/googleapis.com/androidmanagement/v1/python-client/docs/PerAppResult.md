# PerAppResult

The result of an attempt to clear the data of a single app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clearing_result** | **str** | The result of an attempt to clear the data of a single app. | [optional] 

## Example

```python
from openapi_client.models.per_app_result import PerAppResult

# TODO update the JSON string below
json = "{}"
# create an instance of PerAppResult from a JSON string
per_app_result_instance = PerAppResult.from_json(json)
# print the JSON string representation of the object
print(PerAppResult.to_json())

# convert the object into a dict
per_app_result_dict = per_app_result_instance.to_dict()
# create an instance of PerAppResult from a dict
per_app_result_from_dict = PerAppResult.from_dict(per_app_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


