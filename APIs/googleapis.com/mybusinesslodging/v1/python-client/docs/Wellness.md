# Wellness

Guest facilities at the property to promote or maintain health, beauty, and fitness.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**doctor_on_call** | **bool** | Doctor on call. The hotel has a contract with a medical professional who provides services to hotel guests should they fall ill during their stay. The doctor may or may not have an on-site office or be at the hotel at all times. | [optional] 
**doctor_on_call_exception** | **str** | Doctor on call exception. | [optional] 
**elliptical_machine** | **bool** | Elliptical machine. An electric, stationary fitness machine with pedals that simulates climbing, walking or running and provides a user-controlled range of speeds and tensions. May not have arm-controlled levers to work out the upper body as well. Commonly found in a gym, fitness room, health center, or health club. | [optional] 
**elliptical_machine_exception** | **str** | Elliptical machine exception. | [optional] 
**fitness_center** | **bool** | Fitness center. A room or building at the hotel containing equipment to promote physical activity, such as treadmills, elliptical machines, stationary bikes, weight machines, free weights, and/or stretching mats. Use of the fitness center can be free or for a fee. May or may not be staffed. May or may not offer instructor-led classes in various styles of physical conditioning. May or may not be open 24/7. May or may not include locker rooms and showers. Also known as health club, gym, fitness room, health center. | [optional] 
**fitness_center_exception** | **str** | Fitness center exception. | [optional] 
**free_fitness_center** | **bool** | Free fitness center. Guests may use the fitness center for free. | [optional] 
**free_fitness_center_exception** | **str** | Free fitness center exception. | [optional] 
**free_weights** | **bool** | Free weights. Individual handheld fitness equipment of varied weights used for upper body strength training or bodybuilding. Also known as barbells, dumbbells, or kettlebells. Often stored on a rack with the weights arranged from light to heavy. Commonly found in a gym, fitness room, health center, or health club. | [optional] 
**free_weights_exception** | **str** | Free weights exception. | [optional] 
**massage** | **bool** | Massage. A service provided by a trained massage therapist involving the physical manipulation of a guest&#39;s muscles in order to achieve relaxation or pain relief. | [optional] 
**massage_exception** | **str** | Massage exception. | [optional] 
**salon** | **bool** | Salon. A room at the hotel where professionals provide hair styling services such as shampooing, blow drying, hair dos, hair cutting and hair coloring. Also known as hairdresser or beauty salon. | [optional] 
**salon_exception** | **str** | Salon exception. | [optional] 
**sauna** | **bool** | Sauna. A wood-paneled room heated to a high temperature where guests sit on built-in wood benches for the purpose of perspiring and relaxing their muscles. Can be dry or slightly wet heat. Not a steam room. | [optional] 
**sauna_exception** | **str** | Sauna exception. | [optional] 
**spa** | **bool** | Spa. A designated area, room or building at the hotel offering health and beauty treatment through such means as steam baths, exercise equipment, and massage. May also offer facials, nail care, and hair care. Services are usually available by appointment and for an additional fee. Does not apply if hotel only offers a steam room; must offer other beauty and/or health treatments as well. | [optional] 
**spa_exception** | **str** | Spa exception. | [optional] 
**treadmill** | **bool** | Treadmill. An electric stationary fitness machine that simulates a moving path to promote walking or running within a range of user-controlled speeds and inclines. Also known as running machine. Commonly found in a gym, fitness room, health center, or health club. | [optional] 
**treadmill_exception** | **str** | Treadmill exception. | [optional] 
**weight_machine** | **bool** | Weight machine. Non-electronic fitness equipment designed for the user to target the exertion of different muscles. Usually incorporates a padded seat, a stack of flat weights and various bars and pulleys. May be designed for toning a specific part of the body or may involve different user-controlled settings, hardware and pulleys so as to provide an overall workout in one machine. Commonly found in a gym, fitness center, fitness room, or health club. | [optional] 
**weight_machine_exception** | **str** | Weight machine exception. | [optional] 

## Example

```python
from openapi_client.models.wellness import Wellness

# TODO update the JSON string below
json = "{}"
# create an instance of Wellness from a JSON string
wellness_instance = Wellness.from_json(json)
# print the JSON string representation of the object
print(Wellness.to_json())

# convert the object into a dict
wellness_dict = wellness_instance.to_dict()
# create an instance of Wellness from a dict
wellness_from_dict = Wellness.from_dict(wellness_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


