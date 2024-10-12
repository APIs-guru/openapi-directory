# Body

The document body. The body typically contains the full document contents except for headers, footers, and footnotes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**List[StructuralElement]**](StructuralElement.md) | The contents of the body. The indexes for the body&#39;s content begin at zero. | [optional] 

## Example

```python
from openapi_client.models.body import Body

# TODO update the JSON string below
json = "{}"
# create an instance of Body from a JSON string
body_instance = Body.from_json(json)
# print the JSON string representation of the object
print(Body.to_json())

# convert the object into a dict
body_dict = body_instance.to_dict()
# create an instance of Body from a dict
body_from_dict = Body.from_dict(body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


