# Averages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **float** | Average age of the car | [optional] 
**dom** | **float** | Average Days on Market value for the car based on all listings found in the Marketcheck database for this car | [optional] 
**miles** | **float** | Mean miles value for the car | [optional] 
**msrp** | **float** | Mean msrp value for the car | [optional] 
**price** | **float** | Mean price value for the car | [optional] 
**units** | **float** | No of units for this car on the market | [optional] 

## Example

```python
from openapi_client.models.averages import Averages

# TODO update the JSON string below
json = "{}"
# create an instance of Averages from a JSON string
averages_instance = Averages.from_json(json)
# print the JSON string representation of the object
print(Averages.to_json())

# convert the object into a dict
averages_dict = averages_instance.to_dict()
# create an instance of Averages from a dict
averages_from_dict = Averages.from_dict(averages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


