# Output

Location of output file(s) in a Cloud Storage bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | URI for the output file(s). For example, &#x60;gs://my-bucket/outputs/&#x60;. If empty the value is populated from &#x60;Job.output_uri&#x60;. | [optional] 

## Example

```python
from openapi_client.models.output import Output

# TODO update the JSON string below
json = "{}"
# create an instance of Output from a JSON string
output_instance = Output.from_json(json)
# print the JSON string representation of the object
print(Output.to_json())

# convert the object into a dict
output_dict = output_instance.to_dict()
# create an instance of Output from a dict
output_from_dict = Output.from_dict(output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


