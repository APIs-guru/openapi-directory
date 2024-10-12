# LivingAreaFeatures

Features in the living area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**air_conditioning** | **bool** | Air conditioning. An electrical machine used to cool the temperature of the guestroom. | [optional] 
**air_conditioning_exception** | **str** | Air conditioning exception. | [optional] 
**bathtub** | **bool** | Bathtub. A fixed plumbing feature set on the floor and consisting of a large container that accommodates the body of an adult for the purpose of seated bathing. Includes knobs or fixtures to control the temperature of the water, a faucet through which the water flows, and a drain that can be closed for filling and opened for draining. | [optional] 
**bathtub_exception** | **str** | Bathtub exception. | [optional] 
**bidet** | **bool** | Bidet. A plumbing fixture attached to a toilet or a low, fixed sink designed for the purpose of washing after toilet use. | [optional] 
**bidet_exception** | **str** | Bidet exception. | [optional] 
**dryer** | **bool** | Dryer. An electrical machine designed to dry clothing. | [optional] 
**dryer_exception** | **str** | Dryer exception. | [optional] 
**electronic_room_key** | **bool** | Electronic room key. A card coded by the check-in computer that is read by the lock on the hotel guestroom door to allow for entry. | [optional] 
**electronic_room_key_exception** | **str** | Electronic room key exception. | [optional] 
**fireplace** | **bool** | Fireplace. A framed opening (aka hearth) at the base of a chimney in which logs or an electrical fire feature are burned to provide a relaxing ambiance or to heat the room. Often made of bricks or stone. | [optional] 
**fireplace_exception** | **str** | Fireplace exception. | [optional] 
**hairdryer** | **bool** | Hairdryer. A handheld electric appliance that blows temperature-controlled air for the purpose of drying wet hair. Can be mounted to a bathroom wall or a freestanding device stored in the guestroom&#39;s bathroom or closet. | [optional] 
**hairdryer_exception** | **str** | Hairdryer exception. | [optional] 
**heating** | **bool** | Heating. An electrical machine used to warm the temperature of the guestroom. | [optional] 
**heating_exception** | **str** | Heating exception. | [optional] 
**inunit_safe** | **bool** | In-unit safe. A strong fireproof cabinet with a programmable lock, used for the protected storage of valuables in a guestroom. Often built into a closet. | [optional] 
**inunit_safe_exception** | **str** | In-unit safe exception. | [optional] 
**inunit_wifi_available** | **bool** | In-unit Wifi available. Guests can wirelessly connect to the Internet in the guestroom. Can be free or for a fee. | [optional] 
**inunit_wifi_available_exception** | **str** | In-unit Wifi available exception. | [optional] 
**ironing_equipment** | **bool** | Ironing equipment. A device, usually with a flat metal base, that is heated to smooth, finish, or press clothes and a flat, padded, cloth-covered surface on which the clothes are worked. | [optional] 
**ironing_equipment_exception** | **str** | Ironing equipment exception. | [optional] 
**pay_per_view_movies** | **bool** | Pay per view movies. Televisions with channels that offer films that can be viewed for a fee, and have an interface to allow the viewer to accept the terms and approve payment. | [optional] 
**pay_per_view_movies_exception** | **str** | Pay per view movies exception. | [optional] 
**private_bathroom** | **bool** | Private bathroom. A bathroom designated for the express use of the guests staying in a specific guestroom. | [optional] 
**private_bathroom_exception** | **str** | Private bathroom exception. | [optional] 
**shower** | **bool** | Shower. A fixed plumbing fixture for standing bathing that features a tall spray spout or faucet through which water flows, a knob or knobs that control the water&#39;s temperature, and a drain in the floor. | [optional] 
**shower_exception** | **str** | Shower exception. | [optional] 
**toilet** | **bool** | Toilet. A fixed bathroom feature connected to a sewer or septic system and consisting of a water-flushed bowl with a seat, as well as a device that elicites the water-flushing action. Used for the process and disposal of human waste. | [optional] 
**toilet_exception** | **str** | Toilet exception. | [optional] 
**tv** | **bool** | TV. A television is available in the guestroom. | [optional] 
**tv_casting** | **bool** | TV casting. A television equipped with a device through which the video entertainment accessed on a personal computer, phone or tablet can be wirelessly delivered to and viewed on the guestroom&#39;s television. | [optional] 
**tv_casting_exception** | **str** | TV exception. | [optional] 
**tv_exception** | **str** | TV exception. | [optional] 
**tv_streaming** | **bool** | TV streaming. Televisions that embed a range of web-based apps to allow for watching media from those apps. | [optional] 
**tv_streaming_exception** | **str** | TV streaming exception. | [optional] 
**universal_power_adapters** | **bool** | Universal power adapters. A power supply for electronic devices which plugs into a wall for the purpose of converting AC to a single DC voltage. Also know as AC adapter or charger. | [optional] 
**universal_power_adapters_exception** | **str** | Universal power adapters exception. | [optional] 
**washer** | **bool** | Washer. An electrical machine connected to a running water source designed to launder clothing. | [optional] 
**washer_exception** | **str** | Washer exception. | [optional] 

## Example

```python
from openapi_client.models.living_area_features import LivingAreaFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of LivingAreaFeatures from a JSON string
living_area_features_instance = LivingAreaFeatures.from_json(json)
# print the JSON string representation of the object
print(LivingAreaFeatures.to_json())

# convert the object into a dict
living_area_features_dict = living_area_features_instance.to_dict()
# create an instance of LivingAreaFeatures from a dict
living_area_features_from_dict = LivingAreaFeatures.from_dict(living_area_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


