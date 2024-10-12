# RecommendedActionImplementationInfo

Contains information for manual implementation for an Azure SQL Database, Server or Elastic Pool Recommended Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | Gets the method in which this recommended action can be manually implemented. e.g., TSql, AzurePowerShell. | [optional] [readonly] 
**script** | **str** | Gets the manual implementation script. e.g., T-SQL script that could be executed on the database. | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_action_implementation_info import RecommendedActionImplementationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedActionImplementationInfo from a JSON string
recommended_action_implementation_info_instance = RecommendedActionImplementationInfo.from_json(json)
# print the JSON string representation of the object
print(RecommendedActionImplementationInfo.to_json())

# convert the object into a dict
recommended_action_implementation_info_dict = recommended_action_implementation_info_instance.to_dict()
# create an instance of RecommendedActionImplementationInfo from a dict
recommended_action_implementation_info_from_dict = RecommendedActionImplementationInfo.from_dict(recommended_action_implementation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


