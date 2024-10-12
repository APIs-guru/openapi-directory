/*
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.openapitools.client.model.PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:30.576111-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner {
  public static final String SERIALIZED_NAME_PORTFOLIO_DRAWDOWNS = "portfolioDrawdowns";
  @SerializedName(SERIALIZED_NAME_PORTFOLIO_DRAWDOWNS)
  private List<BigDecimal> portfolioDrawdowns = new ArrayList<>();

  public static final String SERIALIZED_NAME_PORTFOLIO_WORST_DRAWDOWNS = "portfolioWorstDrawdowns";
  @SerializedName(SERIALIZED_NAME_PORTFOLIO_WORST_DRAWDOWNS)
  private List<PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner> portfolioWorstDrawdowns = new ArrayList<>();

  public PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner() {
  }

  public PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner portfolioDrawdowns(List<BigDecimal> portfolioDrawdowns) {
    this.portfolioDrawdowns = portfolioDrawdowns;
    return this;
  }

  public PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner addPortfolioDrawdownsItem(BigDecimal portfolioDrawdownsItem) {
    if (this.portfolioDrawdowns == null) {
      this.portfolioDrawdowns = new ArrayList<>();
    }
    this.portfolioDrawdowns.add(portfolioDrawdownsItem);
    return this;
  }

  /**
   * portfolioDrawdowns[t] is the value of the drawdown function at the time t
   * @return portfolioDrawdowns
   */
  @javax.annotation.Nonnull
  public List<BigDecimal> getPortfolioDrawdowns() {
    return portfolioDrawdowns;
  }

  public void setPortfolioDrawdowns(List<BigDecimal> portfolioDrawdowns) {
    this.portfolioDrawdowns = portfolioDrawdowns;
  }


  public PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner portfolioWorstDrawdowns(List<PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner> portfolioWorstDrawdowns) {
    this.portfolioWorstDrawdowns = portfolioWorstDrawdowns;
    return this;
  }

  public PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner addPortfolioWorstDrawdownsItem(PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner portfolioWorstDrawdownsItem) {
    if (this.portfolioWorstDrawdowns == null) {
      this.portfolioWorstDrawdowns = new ArrayList<>();
    }
    this.portfolioWorstDrawdowns.add(portfolioWorstDrawdownsItem);
    return this;
  }

  /**
   * Get portfolioWorstDrawdowns
   * @return portfolioWorstDrawdowns
   */
  @javax.annotation.Nonnull
  public List<PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner> getPortfolioWorstDrawdowns() {
    return portfolioWorstDrawdowns;
  }

  public void setPortfolioWorstDrawdowns(List<PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner> portfolioWorstDrawdowns) {
    this.portfolioWorstDrawdowns = portfolioWorstDrawdowns;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner portfolioAnalysisDrawdownsPost200ResponsePortfoliosInner = (PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner) o;
    return Objects.equals(this.portfolioDrawdowns, portfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.portfolioDrawdowns) &&
        Objects.equals(this.portfolioWorstDrawdowns, portfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.portfolioWorstDrawdowns);
  }

  @Override
  public int hashCode() {
    return Objects.hash(portfolioDrawdowns, portfolioWorstDrawdowns);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner {\n");
    sb.append("    portfolioDrawdowns: ").append(toIndentedString(portfolioDrawdowns)).append("\n");
    sb.append("    portfolioWorstDrawdowns: ").append(toIndentedString(portfolioWorstDrawdowns)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("portfolioDrawdowns");
    openapiFields.add("portfolioWorstDrawdowns");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("portfolioDrawdowns");
    openapiRequiredFields.add("portfolioWorstDrawdowns");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner is not found in the empty JSON string", PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the required json array is present
      if (jsonObj.get("portfolioDrawdowns") == null) {
        throw new IllegalArgumentException("Expected the field `linkedContent` to be an array in the JSON string but got `null`");
      } else if (!jsonObj.get("portfolioDrawdowns").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `portfolioDrawdowns` to be an array in the JSON string but got `%s`", jsonObj.get("portfolioDrawdowns").toString()));
      }
      // ensure the json data is an array
      if (!jsonObj.get("portfolioWorstDrawdowns").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `portfolioWorstDrawdowns` to be an array in the JSON string but got `%s`", jsonObj.get("portfolioWorstDrawdowns").toString()));
      }

      JsonArray jsonArrayportfolioWorstDrawdowns = jsonObj.getAsJsonArray("portfolioWorstDrawdowns");
      // validate the required field `portfolioWorstDrawdowns` (array)
      for (int i = 0; i < jsonArrayportfolioWorstDrawdowns.size(); i++) {
        PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner.validateJsonElement(jsonArrayportfolioWorstDrawdowns.get(i));
      };
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.class));

       return (TypeAdapter<T>) new TypeAdapter<PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner>() {
           @Override
           public void write(JsonWriter out, PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner
   * @throws IOException if the JSON string is invalid with respect to PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner
   */
  public static PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner.class);
  }

  /**
   * Convert an instance of PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

