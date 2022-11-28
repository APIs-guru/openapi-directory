import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in featurizations.</p> <p> <b>Weather Index</b> </p> <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p> <p> <b>Holidays</b> </p> <p>Holidays is a built-in featurization that incorporates a feature-engineered dataset of national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p>
**/
export declare class SupplementaryFeature extends SpeakeasyBase {
    name: string;
    value: string;
}
