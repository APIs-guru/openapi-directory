# Administrator

This represents an enterprise admin who can manage the enterprise in the managed Google Play store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The admin&#39;s email address. | [optional] 

## Example

```python
from openapi_client.models.administrator import Administrator

# TODO update the JSON string below
json = "{}"
# create an instance of Administrator from a JSON string
administrator_instance = Administrator.from_json(json)
# print the JSON string representation of the object
print(Administrator.to_json())

# convert the object into a dict
administrator_dict = administrator_instance.to_dict()
# create an instance of Administrator from a dict
administrator_from_dict = Administrator.from_dict(administrator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


