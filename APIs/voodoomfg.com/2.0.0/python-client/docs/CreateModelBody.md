# CreateModelBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_url** | **str** | URL to download the model data from. The URL must end in .STL or .OBJ -- the extension of the final segment of the URL is used to determine how ot parse the file. | [optional] 

## Example

```python
from openapi_client.models.create_model_body import CreateModelBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateModelBody from a JSON string
create_model_body_instance = CreateModelBody.from_json(json)
# print the JSON string representation of the object
print(CreateModelBody.to_json())

# convert the object into a dict
create_model_body_dict = create_model_body_instance.to_dict()
# create an instance of CreateModelBody from a dict
create_model_body_from_dict = CreateModelBody.from_dict(create_model_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


