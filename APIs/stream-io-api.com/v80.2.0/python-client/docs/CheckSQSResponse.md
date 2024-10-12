# CheckSQSResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, object]** | Error data | [optional] 
**duration** | **str** |  | 
**error** | **str** | Error text | [optional] 
**status** | **str** | Validation result | 

## Example

```python
from openapi_client.models.check_sqs_response import CheckSQSResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSQSResponse from a JSON string
check_sqs_response_instance = CheckSQSResponse.from_json(json)
# print the JSON string representation of the object
print(CheckSQSResponse.to_json())

# convert the object into a dict
check_sqs_response_dict = check_sqs_response_instance.to_dict()
# create an instance of CheckSQSResponse from a dict
check_sqs_response_from_dict = CheckSQSResponse.from_dict(check_sqs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


