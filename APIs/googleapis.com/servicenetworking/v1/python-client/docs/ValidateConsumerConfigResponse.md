# ValidateConsumerConfigResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**existing_subnetwork_candidates** | [**List[Subnetwork]**](Subnetwork.md) | List of subnetwork candidates from the request which exist with the &#x60;ip_cidr_range&#x60;, &#x60;secondary_ip_cider_ranges&#x60;, and &#x60;outside_allocation&#x60; fields set. | [optional] 
**is_valid** | **bool** | Indicates whether all the requested validations passed. | [optional] 
**validation_error** | **str** | The first validation which failed. | [optional] 

## Example

```python
from openapi_client.models.validate_consumer_config_response import ValidateConsumerConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateConsumerConfigResponse from a JSON string
validate_consumer_config_response_instance = ValidateConsumerConfigResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateConsumerConfigResponse.to_json())

# convert the object into a dict
validate_consumer_config_response_dict = validate_consumer_config_response_instance.to_dict()
# create an instance of ValidateConsumerConfigResponse from a dict
validate_consumer_config_response_from_dict = ValidateConsumerConfigResponse.from_dict(validate_consumer_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


