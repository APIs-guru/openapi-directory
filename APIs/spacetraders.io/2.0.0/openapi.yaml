openapi: 3.0.0
servers:
  - description: v2
    url: https://api.spacetraders.io/v2
info:
  contact:
    email: joel@spacetraders.io
    name: Joel Brubaker
  description: |+
    SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.

    The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.

    ```json http
    {
      "method": "GET",
      "url": "https://api.spacetraders.io/v2",
    }
    ```

    Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.

    We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.


  license:
    name: No Permission
    url: https://choosealicense.com/no-permission/
  title: SpaceTraders API
  version: 2.0.0
  x-apisguru-categories:
    - entertainment
  x-logo:
    url: https://spacetraders.io/logo/logo-over-black.svg
  x-origin:
    - format: openapi
      url: https://raw.githubusercontent.com/SpaceTradersAPI/api-docs/main/reference/SpaceTraders.json
      version: "3.0"
  x-providerName: spacetraders.io
security:
  - AgentToken: []
tags:
  - description: Factions
    name: factions
  - description: Fleet
    name: fleet
  - description: Contracts
    name: contracts
  - description: Systems
    name: systems
  - description: Agents
    name: agents
paths:
  /factions:
    get:
      description: List all discovered factions in the game.
      operationId: get-factions
      parameters:
        - description: What entry offset to request
          in: query
          name: page
          schema:
            minimum: 1
            type: integer
        - description: How many entries to return per page
          in: query
          name: limit
          schema:
            maximum: 20
            minimum: 1
            type: integer
      responses:
        "200":
          content:
            application/json:
              schema:
                properties:
                  data:
                    items:
                      $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/faction"
                    type: array
                  meta:
                    $ref: "#/paths/~1systems/get/responses/200/content/application~1json/schema/properties/meta"
                required:
                  - data
                  - meta
                type: object
          description: ""
      summary: List Factions
      tags:
        - factions
  "/factions/{factionSymbol}":
    get:
      description: View the details of a faction.
      operationId: get-faction
      responses:
        "200":
          content:
            application/json:
              schema:
                properties:
                  data:
                    $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/faction"
                required:
                  - data
                type: object
          description: OK
      summary: Get Faction
      tags:
        - factions
    parameters:
      - description: The faction symbol
        in: path
        name: factionSymbol
        required: true
        schema:
          default: CGR
          type: string
  /my/agent:
    get:
      description: Fetch your agent's details.
      operationId: get-my-agent
      responses:
        "200":
          content:
            application/json:
              schema:
                properties:
                  data:
                    $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/agent"
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: My Agent Details
      tags:
        - agents
  /my/contracts:
    get:
      description: List all of your contracts.
      operationId: get-contracts
      parameters:
        - description: What entry offset to request
          in: query
          name: page
          schema:
            minimum: 1
            type: integer
        - description: How many entries to return per page
          in: query
          name: limit
          schema:
            maximum: 20
            minimum: 1
            type: integer
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    items:
                      $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/contract"
                    type: array
                  meta:
                    $ref: "#/paths/~1systems/get/responses/200/content/application~1json/schema/properties/meta"
                required:
                  - data
                  - meta
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: List Contracts
      tags:
        - contracts
  "/my/contracts/{contractId}":
    get:
      description: Get the details of a contract by ID.
      operationId: get-contract
      responses:
        "200":
          content:
            application/json:
              schema:
                properties:
                  data:
                    $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/contract"
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Get Contract
      tags:
        - contracts
    parameters:
      - description: The contract ID
        in: path
        name: contractId
        required: true
        schema:
          type: string
  "/my/contracts/{contractId}/accept":
    parameters:
      - in: path
        name: contractId
        required: true
        schema:
          type: string
    post:
      description: Accept a contract.
      operationId: accept-contract
      responses:
        "200":
          content:
            application/json:
              schema:
                properties:
                  data:
                    properties:
                      agent:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/agent"
                      contract:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/contract"
                    required:
                      - contract
                      - agent
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Accept Contract
      tags:
        - contracts
  "/my/contracts/{contractId}/deliver":
    parameters:
      - description: The ID of the contract
        in: path
        name: contractId
        required: true
        schema:
          type: string
    post:
      description: Deliver cargo on a given contract.
      operationId: deliver-contract
      requestBody:
        content:
          application/json:
            schema:
              properties:
                shipSymbol:
                  type: string
                tradeSymbol:
                  type: string
                units:
                  type: integer
              required:
                - shipSymbol
                - tradeSymbol
                - units
              type: object
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cargo:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/cargo"
                      contract:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/contract"
                    required:
                      - contract
                      - cargo
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Deliver Contract
      tags:
        - contracts
  "/my/contracts/{contractId}/fulfill":
    parameters:
      - description: The ID of the contract
        in: path
        name: contractId
        required: true
        schema:
          type: string
    post:
      description: Fulfill a contract
      operationId: fulfill-contract
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      agent:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/agent"
                      contract:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/contract"
                    required:
                      - contract
                      - agent
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Fulfill Contract
      tags:
        - contracts
  /my/ships:
    get:
      description: Retrieve all of your ships.
      operationId: get-my-ships
      parameters:
        - description: What entry offset to request
          in: query
          name: page
          schema:
            minimum: 1
            type: integer
        - description: How many entries to return per page
          in: query
          name: limit
          schema:
            maximum: 20
            minimum: 1
            type: integer
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    items:
                      $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship"
                    type: array
                  meta:
                    $ref: "#/paths/~1systems/get/responses/200/content/application~1json/schema/properties/meta"
                required:
                  - data
                  - meta
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: List Ships
      tags:
        - fleet
    post:
      description: Purchase a ship
      operationId: purchase-ship
      requestBody:
        content:
          application/json:
            schema:
              properties:
                shipType:
                  $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints~1%7BwaypointSymbol%7D~1shipyard/get/responses/200/content/application~1json/schema/properties/data/properties/shipTypes/items/properties/type"
                waypointSymbol:
                  description: The symbol of the waypoint you want to purchase the ship at.
                  type: string
              required:
                - shipType
                - waypointSymbol
              type: object
      responses:
        "201":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      agent:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/agent"
                      ship:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship"
                      transaction:
                        $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints~1%7BwaypointSymbol%7D~1shipyard/get/responses/200/content/application~1json/schema/properties/data/properties/transactions/items"
                    required:
                      - ship
                      - agent
                      - transaction
                    type: object
                required:
                  - data
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Purchase Ship
      tags:
        - fleet
  "/my/ships/{shipSymbol}":
    get:
      description: Retrieve the details of your ship.
      operationId: get-my-ship
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship"
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Get Ship
      tags:
        - fleet
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
  "/my/ships/{shipSymbol}/cargo":
    get:
      description: Retrieve the cargo of your ship.
      operationId: get-my-ship-cargo
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/cargo"
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Get Ship Cargo
      tags:
        - fleet
    parameters:
      - description: The symbol of the ship
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
  "/my/ships/{shipSymbol}/chart":
    parameters:
      - description: The symbol of the ship
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: |-
        Command a ship to chart the current waypoint.

        Waypoints in the universe are uncharted by default. These locations will not show up in the API until they have been charted by a ship.

        Charting a location will record your agent as the one who created the chart.
      operationId: create-chart
      responses:
        "201":
          content:
            application/json:
              schema:
                properties:
                  data:
                    properties:
                      chart:
                        $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints/get/responses/200/content/application~1json/schema/properties/data/items/properties/chart"
                      waypoint:
                        $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints/get/responses/200/content/application~1json/schema/properties/data/items"
                    required:
                      - chart
                      - waypoint
                    type: object
                required:
                  - data
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Create Chart
      tags:
        - fleet
  "/my/ships/{shipSymbol}/cooldown":
    get:
      description: |-
        Retrieve the details of your ship's reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.

        Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.

        Response returns a 204 status code (no-content) when the ship has no cooldown.
      operationId: get-ship-cooldown
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    $ref: "#/paths/~1my~1ships~1%7BshipSymbol%7D~1refine/post/responses/200/content/application~1json/schema/properties/data/properties/cooldown"
                required:
                  - data
                type: object
          description: OK
        "204":
          description: No cooldown
      security:
        - AgentToken: []
      summary: Get Ship Cooldown
      tags:
        - fleet
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
  "/my/ships/{shipSymbol}/dock":
    parameters:
      - description: The symbol of the ship
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: |-
        Attempt to dock your ship at it's current location. Docking will only succeed if the waypoint is a dockable location, and your ship is capable of docking at the time of the request.

        The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
      operationId: dock-ship
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      nav:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav"
                    required:
                      - nav
                    type: object
                required:
                  - data
                title: Dock Ship 200 Response
                type: object
          description: The ship has successfully docked at it's current location.
      security:
        - AgentToken: []
      summary: Dock Ship
      tags:
        - fleet
  "/my/ships/{shipSymbol}/extract":
    parameters:
      - description: The ship symbol
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Extract resources from the waypoint into your ship. Send an optional survey as the payload to target specific yields.
      operationId: extract-resources
      requestBody:
        content:
          application/json:
            schema:
              properties:
                survey:
                  $ref: "#/paths/~1my~1ships~1%7BshipSymbol%7D~1survey/post/responses/201/content/application~1json/schema/properties/data/properties/surveys/items"
              type: object
      responses:
        "201":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cargo:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/cargo"
                      cooldown:
                        $ref: "#/paths/~1my~1ships~1%7BshipSymbol%7D~1refine/post/responses/200/content/application~1json/schema/properties/data/properties/cooldown"
                      extraction:
                        description: ""
                        properties:
                          shipSymbol:
                            minLength: 1
                            type: string
                          yield:
                            properties:
                              symbol:
                                minLength: 1
                                type: string
                              units:
                                description: The number of units extracted that were placed into the ship's cargo hold.
                                type: integer
                            required:
                              - symbol
                              - units
                            type: object
                        required:
                          - shipSymbol
                          - yield
                        type: object
                    required:
                      - extraction
                      - cooldown
                      - cargo
                    type: object
                required:
                  - data
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Extract Resources
      tags:
        - fleet
  "/my/ships/{shipSymbol}/jettison":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Jettison cargo from your ship's cargo hold.
      operationId: jettison
      requestBody:
        content:
          application/json:
            schema:
              properties:
                symbol:
                  type: string
                units:
                  minimum: 1
                  type: integer
              required:
                - symbol
                - units
              type: object
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cargo:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/cargo"
                    required:
                      - cargo
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Jettison Cargo
      tags:
        - fleet
  "/my/ships/{shipSymbol}/jump":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Jump your ship instantly to a target system. Unlike other forms of navigation, jumping requires a unit of antimatter.
      operationId: jump-ship
      requestBody:
        content:
          application/json:
            schema:
              properties:
                systemSymbol:
                  description: The system symbol to jump to.
                  type: string
              required:
                - systemSymbol
              type: object
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cooldown:
                        $ref: "#/paths/~1my~1ships~1%7BshipSymbol%7D~1refine/post/responses/200/content/application~1json/schema/properties/data/properties/cooldown"
                      nav:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav"
                    required:
                      - route
                      - cooldown
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Jump Ship
      tags:
        - fleet
  "/my/ships/{shipSymbol}/nav":
    get:
      description: Get the current nav status of a ship.
      operationId: get-ship-nav
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav"
                required:
                  - data
                type: object
          description: The current nav status of the ship.
      security:
        - AgentToken: []
      summary: Get Ship Nav
      tags:
        - fleet
    parameters:
      - description: The ship symbol
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    patch:
      description: Update the nav data of a ship, such as the flight mode.
      operationId: patch-ship-nav
      requestBody:
        content:
          application/json:
            schema:
              properties:
                flightMode:
                  $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav/properties/flightMode"
              type: object
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav"
                required:
                  - data
                type: object
          description: The updated nav status of the ship.
      security:
        - AgentToken: []
      summary: Patch Ship Nav
      tags:
        - fleet
  "/my/ships/{shipSymbol}/navigate":
    parameters:
      - description: The ship symbol
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: |-
        Navigate to a target destination. The destination must be located within the same system as the ship. Navigating will consume the necessary fuel and supplies from the ship's manifest, and will pay out crew wages from the agent's account.

        The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.

        To travel between systems, see the ship's warp or jump actions.
      operationId: navigate-ship
      requestBody:
        content:
          application/json:
            schema:
              properties:
                waypointSymbol:
                  description: The target destination.
                  type: string
              required:
                - waypointSymbol
              type: object
        description: ""
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      fuel:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/fuel"
                      nav:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav"
                    required:
                      - nav
                      - fuel
                    type: object
                required:
                  - data
                type: object
          description: The successful transit information including the route details and changes to ship fuel, supplies, and crew wages paid. The route includes the expected time of arrival.
      security:
        - AgentToken: []
      summary: Navigate Ship
      tags:
        - fleet
  "/my/ships/{shipSymbol}/orbit":
    parameters:
      - description: The symbol of the ship
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: |-
        Attempt to move your ship into orbit at it's current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.

        The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
      operationId: orbit-ship
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      nav:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav"
                    required:
                      - nav
                    type: object
                required:
                  - data
                title: Orbit Ship 200 Response
                type: object
          description: The ship has successfully moved into orbit at it's current location.
      security:
        - AgentToken: []
      summary: Orbit Ship
      tags:
        - fleet
  "/my/ships/{shipSymbol}/purchase":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Purchase cargo.
      operationId: purchase-cargo
      requestBody:
        content:
          application/json:
            schema:
              properties:
                symbol:
                  type: string
                units:
                  type: integer
              required:
                - symbol
                - units
              title: Purchase Cargo Request
              type: object
      responses:
        "201":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      agent:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/agent"
                      cargo:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/cargo"
                      transaction:
                        $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints~1%7BwaypointSymbol%7D~1market/get/responses/200/content/application~1json/schema/properties/data/properties/transactions/items"
                    required:
                      - cargo
                      - transaction
                      - agent
                    type: object
                required:
                  - data
                title: Purchase Cargo 201 Response
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Purchase Cargo
      tags:
        - fleet
  "/my/ships/{shipSymbol}/refine":
    parameters:
      - description: The symbol of the ship
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request.
      operationId: ship-refine
      requestBody:
        content:
          application/json:
            schema:
              properties:
                produce:
                  enum:
                    - IRON
                    - COPPER
                    - SILVER
                    - GOLD
                    - ALUMINUM
                    - PLATINUM
                    - URANITE
                    - MERITIUM
                    - FUEL
                  type: string
              required:
                - produce
              type: object
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cargo:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/cargo"
                      consumed:
                        items:
                          properties:
                            tradeSymbol:
                              type: string
                            units:
                              type: integer
                          type: object
                        type: array
                      cooldown:
                        description: A cooldown is a period of time in which a ship cannot perform certain actions.
                        properties:
                          expiration:
                            description: The date and time when the cooldown expires in ISO 8601 format
                            format: date-time
                            minimum: 0
                            type: string
                          remainingSeconds:
                            description: The remaining duration of the cooldown in seconds
                            minimum: 0
                            type: integer
                          shipSymbol:
                            description: The symbol of the ship that is on cooldown
                            minLength: 1
                            type: string
                          totalSeconds:
                            description: The total duration of the cooldown in seconds
                            minimum: 0
                            type: integer
                        required:
                          - shipSymbol
                          - totalSeconds
                          - remainingSeconds
                          - expiration
                        type: object
                      produced:
                        items:
                          properties:
                            tradeSymbol:
                              type: string
                            units:
                              type: integer
                          type: object
                        type: array
                    required:
                      - cargo
                      - cooldown
                      - produced
                      - consumed
                    type: object
                required:
                  - data
                title: Ship Refine 200 Response
                type: object
          description: The ship has successfully started refining.
      security:
        - AgentToken: []
      summary: Ship Refine
      tags:
        - fleet
  "/my/ships/{shipSymbol}/refuel":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Refuel your ship from the local market.
      operationId: refuel-ship
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      agent:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/agent"
                      fuel:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/fuel"
                    required:
                      - agent
                      - fuel
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Refuel Ship
      tags:
        - fleet
  "/my/ships/{shipSymbol}/scan/ships":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Activate your ship's sensor arrays to scan for ship information.
      operationId: create-ship-ship-scan
      responses:
        "201":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cooldown:
                        $ref: "#/paths/~1my~1ships~1%7BshipSymbol%7D~1refine/post/responses/200/content/application~1json/schema/properties/data/properties/cooldown"
                      ships:
                        items:
                          description: The ship that was scanned. Details include information about the ship that could be detected by the scanner.
                          properties:
                            engine:
                              description: The engine of the ship.
                              properties:
                                symbol:
                                  type: string
                              required:
                                - symbol
                              type: object
                            frame:
                              description: The frame of the ship.
                              properties:
                                symbol:
                                  type: string
                              required:
                                - symbol
                              type: object
                            mounts:
                              items:
                                description: A mount on the ship.
                                properties:
                                  symbol:
                                    type: string
                                required:
                                  - symbol
                                type: object
                              type: array
                            nav:
                              $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav"
                            reactor:
                              description: The reactor of the ship.
                              properties:
                                symbol:
                                  type: string
                              required:
                                - symbol
                              type: object
                            registration:
                              $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/registration"
                            symbol:
                              description: The globally unique identifier of the ship.
                              type: string
                          required:
                            - symbol
                            - registration
                            - nav
                            - engine
                          type: object
                        type: array
                    required:
                      - cooldown
                      - ships
                    type: object
                required:
                  - data
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Scan Ships
      tags:
        - fleet
  "/my/ships/{shipSymbol}/scan/systems":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Activate your ship's sensor arrays to scan for system information.
      operationId: create-ship-system-scan
      responses:
        "201":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cooldown:
                        $ref: "#/paths/~1my~1ships~1%7BshipSymbol%7D~1refine/post/responses/200/content/application~1json/schema/properties/data/properties/cooldown"
                      systems:
                        items:
                          description: ""
                          properties:
                            distance:
                              type: integer
                            sectorSymbol:
                              minLength: 1
                              type: string
                            symbol:
                              minLength: 1
                              type: string
                            type:
                              $ref: "#/paths/~1systems/get/responses/200/content/application~1json/schema/properties/data/items/properties/type"
                            x:
                              type: integer
                            y:
                              type: integer
                          required:
                            - symbol
                            - sectorSymbol
                            - type
                            - x
                            - y
                            - distance
                          type: object
                        type: array
                    required:
                      - cooldown
                      - systems
                    type: object
                required:
                  - data
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Scan Systems
      tags:
        - fleet
  "/my/ships/{shipSymbol}/scan/waypoints":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Activate your ship's sensor arrays to scan for waypoint information.
      operationId: create-ship-waypoint-scan
      responses:
        "201":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cooldown:
                        $ref: "#/paths/~1my~1ships~1%7BshipSymbol%7D~1refine/post/responses/200/content/application~1json/schema/properties/data/properties/cooldown"
                      waypoints:
                        items:
                          description: A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
                          properties:
                            chart:
                              $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints/get/responses/200/content/application~1json/schema/properties/data/items/properties/chart"
                            faction:
                              $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints/get/responses/200/content/application~1json/schema/properties/data/items/properties/faction"
                            orbitals:
                              items:
                                $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints/get/responses/200/content/application~1json/schema/properties/data/items/properties/orbitals/items"
                              type: array
                            symbol:
                              minLength: 1
                              type: string
                            systemSymbol:
                              minLength: 1
                              type: string
                            traits:
                              description: The traits of the waypoint.
                              items:
                                $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints/get/responses/200/content/application~1json/schema/properties/data/items/properties/traits/items"
                              type: array
                            type:
                              $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav/properties/route/properties/destination/properties/type"
                            x:
                              type: integer
                            y:
                              type: integer
                          required:
                            - symbol
                            - type
                            - systemSymbol
                            - x
                            - y
                            - orbitals
                            - traits
                          type: object
                        type: array
                    required:
                      - cooldown
                      - waypoints
                    type: object
                required:
                  - data
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Scan Waypoints
      tags:
        - fleet
  "/my/ships/{shipSymbol}/sell":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Sell cargo.
      operationId: sell-cargo
      requestBody:
        content:
          application/json:
            schema:
              properties:
                symbol:
                  type: string
                units:
                  type: integer
              required:
                - symbol
                - units
              title: SellCargoRequest
              type: object
      responses:
        "201":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      agent:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/agent"
                      cargo:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/cargo"
                      transaction:
                        $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints~1%7BwaypointSymbol%7D~1market/get/responses/200/content/application~1json/schema/properties/data/properties/transactions/items"
                    required:
                      - cargo
                      - transaction
                      - agent
                    type: object
                required:
                  - data
                title: Sell Cargo 201 Response
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Sell Cargo
      tags:
        - fleet
  "/my/ships/{shipSymbol}/survey":
    parameters:
      - description: The symbol of the ship
        in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: |-
        If you want to target specific yields for an extraction, you can survey a waypoint, such as an asteroid field, and send the survey in the body of the extract request. Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.

        Your ship will enter a cooldown between consecutive survey requests. Surveys will eventually expire after a period of time. Multiple ships can use the same survey for extraction.
      operationId: create-survey
      responses:
        "201":
          content:
            application/json:
              schema:
                properties:
                  data:
                    properties:
                      cooldown:
                        $ref: "#/paths/~1my~1ships~1%7BshipSymbol%7D~1refine/post/responses/200/content/application~1json/schema/properties/data/properties/cooldown"
                      surveys:
                        items:
                          description: A resource survey of a waypoint, detailing a specific extraction location and the types of resources that can be found there.
                          properties:
                            deposits:
                              description: A list of deposits that can be found at this location.
                              items:
                                description: A surveyed deposit of a mineral or resource available for extraction.
                                properties:
                                  symbol:
                                    description: The symbol of the deposit.
                                    type: string
                                required:
                                  - symbol
                                type: object
                              type: array
                            expiration:
                              description: The date and time when the survey expires. After this date and time, the survey will no longer be available for extraction.
                              format: date-time
                              minimum: 0
                              type: string
                            signature:
                              description: A unique signature for the location of this survey. This signature is verified when attempting an extraction using this survey.
                              minLength: 1
                              type: string
                            size:
                              description: The size of the deposit. This value indicates how much can be extracted from the survey before it is exhausted.
                              enum:
                                - SMALL
                                - MODERATE
                                - LARGE
                              type: string
                            symbol:
                              description: The symbol of the waypoint that this survey is for.
                              minLength: 1
                              type: string
                          required:
                            - signature
                            - symbol
                            - deposits
                            - expiration
                            - size
                          type: object
                        type: array
                    required:
                      - surveys
                      - cooldown
                    type: object
                required:
                  - data
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Create Survey
      tags:
        - fleet
  "/my/ships/{shipSymbol}/transfer":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: Transfer cargo between ships.
      operationId: transfer-cargo
      requestBody:
        content:
          application/json:
            schema:
              properties:
                shipSymbol:
                  type: string
                tradeSymbol:
                  type: string
                units:
                  type: integer
              required:
                - tradeSymbol
                - units
                - shipSymbol
              title: Transfer Cargo Request
              type: object
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      cargo:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/cargo"
                    required:
                      - cargo
                    type: object
                required:
                  - data
                title: Transfer Cargo 200 Response
                type: object
          description: Created
      security:
        - AgentToken: []
      summary: Transfer Cargo
      tags:
        - fleet
  "/my/ships/{shipSymbol}/warp":
    parameters:
      - in: path
        name: shipSymbol
        required: true
        schema:
          type: string
    post:
      description: |-
        Warp your ship to a target destination in another system. Warping will consume the necessary fuel and supplies from the ship's manifest, and will pay out crew wages from the agent's account.

        The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.
      operationId: warp-ship
      requestBody:
        content:
          application/json:
            schema:
              properties:
                waypointSymbol:
                  description: The target destination.
                  type: string
              required:
                - waypointSymbol
              type: object
        description: ""
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    properties:
                      fuel:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/fuel"
                      nav:
                        $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav"
                    required:
                      - nav
                      - fuel
                    type: object
                required:
                  - data
                type: object
          description: The successful transit information including the route details and changes to ship fuel, supplies, and crew wages paid. The route includes the expected time of arrival.
      security:
        - AgentToken: []
      summary: Warp Ship
      tags:
        - fleet
  /register:
    post:
      description: |-
        Creates a new agent and ties it to a temporary Account.

        The agent symbol is a 3-14 character string that will represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.

        A new agent will be granted an authorization token, a contract with their starting faction, a command ship with a jump drive, and one hundred thousand credits.

        > #### Keep your token safe and secure
        >
        > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.

        You can accept your contract using the `/my/contracts/{contractId}/accept` endpoint. You will want to navigate your command ship to a nearby asteroid field and execute the `/my/ships/{shipSymbol}/extract` endpoint to mine various types of ores and minerals.

        Return to the contract destination and execute the `/my/ships/{shipSymbol}/deliver` endpoint to deposit goods into the contract.

        When your contract is fulfilled, you can call `/my/contracts/{contractId}/fulfill` to retrieve payment.
      operationId: register
      requestBody:
        content:
          application/json:
            schema:
              properties:
                faction:
                  description: The faction you choose determines your headquarters.
                  enum:
                    - COSMIC
                    - VOID
                    - GALACTIC
                    - QUANTUM
                    - DOMINION
                symbol:
                  description: How other agents will see your ships and information.
                  example: BADGER
                  maxLength: 14
                  minLength: 3
                  type: string
              required:
                - symbol
                - faction
              type: object
        description: ""
      responses:
        "201":
          content:
            application/json:
              schema:
                properties:
                  data:
                    properties:
                      agent:
                        description: ""
                        properties:
                          accountId:
                            minLength: 1
                            type: string
                          credits:
                            description: The number of credits the agent has available. Credits can be negative if funds have been overdrawn.
                            type: integer
                          headquarters:
                            description: The headquarters of the agent.
                            minLength: 1
                            type: string
                          symbol:
                            minLength: 1
                            type: string
                        required:
                          - accountId
                          - symbol
                          - headquarters
                          - credits
                        type: object
                      contract:
                        description: ""
                        properties:
                          accepted:
                            default: false
                            description: Whether the contract has been accepted by the agent
                            type: boolean
                          expiration:
                            description: The time at which the contract expires
                            format: date-time
                            type: string
                          factionSymbol:
                            description: The symbol of the faction that this contract is for.
                            minLength: 1
                            type: string
                          fulfilled:
                            default: false
                            description: Whether the contract has been fulfilled
                            type: boolean
                          id:
                            minLength: 1
                            type: string
                          terms:
                            properties:
                              deadline:
                                description: The deadline for the contract.
                                format: date-time
                                type: string
                              deliver:
                                items:
                                  description: The details of a delivery contract. Includes the type of good, units needed, and the destination.
                                  properties:
                                    destinationSymbol:
                                      description: The destination where goods need to be delivered.
                                      minLength: 1
                                      type: string
                                    tradeSymbol:
                                      description: The symbol of the trade good to deliver.
                                      minLength: 1
                                      type: string
                                    unitsFulfilled:
                                      description: The number of units fulfilled on this contract.
                                      type: integer
                                    unitsRequired:
                                      description: The number of units that need to be delivered on this contract.
                                      type: integer
                                  required:
                                    - tradeSymbol
                                    - destinationSymbol
                                    - unitsRequired
                                    - unitsFulfilled
                                  type: object
                                type: array
                              payment:
                                properties:
                                  onAccepted:
                                    description: The amount of credits received up front for accepting the contract.
                                    type: integer
                                  onFulfilled:
                                    description: The amount of credits received when the contract is fulfilled.
                                    type: integer
                                required:
                                  - onAccepted
                                  - onFulfilled
                                type: object
                            required:
                              - deadline
                              - payment
                            type: object
                          type:
                            enum:
                              - PROCUREMENT
                              - TRANSPORT
                              - SHUTTLE
                            type: string
                        required:
                          - id
                          - factionSymbol
                          - type
                          - terms
                          - accepted
                          - fulfilled
                          - expiration
                        type: object
                      faction:
                        description: ""
                        properties:
                          description:
                            minLength: 1
                            type: string
                          headquarters:
                            minLength: 1
                            type: string
                          name:
                            minLength: 1
                            type: string
                          symbol:
                            minLength: 1
                            type: string
                          traits:
                            items:
                              properties:
                                description:
                                  description: A description of the trait.
                                  type: string
                                name:
                                  description: The name of the trait.
                                  type: string
                                symbol:
                                  description: The unique identifier of the trait.
                                  enum:
                                    - BUREAUCRATIC
                                    - SECRETIVE
                                    - CAPITALISTIC
                                    - INDUSTRIOUS
                                    - PEACEFUL
                                    - DISTRUSTFUL
                                    - WELCOMING
                                    - SMUGGLERS
                                    - SCAVENGERS
                                    - REBELLIOUS
                                    - EXILES
                                    - PIRATES
                                    - RAIDERS
                                    - CLAN
                                    - GUILD
                                    - DOMINION
                                    - FRINGE
                                    - FORSAKEN
                                    - ISOLATED
                                    - LOCALIZED
                                    - ESTABLISHED
                                    - NOTABLE
                                    - DOMINANT
                                    - INESCAPABLE
                                    - INNOVATIVE
                                    - BOLD
                                    - VISIONARY
                                    - CURIOUS
                                    - DARING
                                    - EXPLORATORY
                                    - RESOURCEFUL
                                    - FLEXIBLE
                                    - COOPERATIVE
                                    - UNITED
                                    - STRATEGIC
                                    - INTELLIGENT
                                    - RESEARCH_FOCUSED
                                    - COLLABORATIVE
                                    - PROGRESSIVE
                                    - MILITARISTIC
                                    - TECHNOLOGICALLY_ADVANCED
                                    - AGGRESSIVE
                                    - IMPERIALISTIC
                                    - TREASURE_HUNTERS
                                    - DEXTEROUS
                                    - UNPREDICTABLE
                                    - BRUTAL
                                    - FLEETING
                                    - ADAPTABLE
                                    - SELF_SUFFICIENT
                                    - DEFENSIVE
                                    - PROUD
                                    - DIVERSE
                                    - INDEPENDENT
                                    - SELF_INTERESTED
                                    - FRAGMENTED
                                    - COMMERCIAL
                                    - FREE_MARKETS
                                    - ENTREPRENEURIAL
                                  type: string
                              required:
                                - symbol
                                - name
                                - description
                              type: object
                            type: array
                        required:
                          - symbol
                          - name
                          - description
                          - headquarters
                          - traits
                        type: object
                      ship:
                        description: A ship
                        properties:
                          cargo:
                            properties:
                              capacity:
                                description: The max number of items that can be stored in the cargo hold.
                                minimum: 0
                                type: integer
                              inventory:
                                description: The items currently in the cargo hold.
                                items:
                                  description: The type of cargo item and the number of units.
                                  properties:
                                    description:
                                      description: The description of the cargo item type.
                                      type: string
                                    name:
                                      description: The name of the cargo item type.
                                      type: string
                                    symbol:
                                      description: The unique identifier of the cargo item type.
                                      type: string
                                    units:
                                      description: The number of units of the cargo item.
                                      minimum: 1
                                      type: integer
                                  required:
                                    - symbol
                                    - name
                                    - description
                                    - units
                                  type: object
                                type: array
                              units:
                                description: The number of items currently stored in the cargo hold.
                                minimum: 0
                                type: integer
                            required:
                              - capacity
                              - units
                              - inventory
                            type: object
                          crew:
                            description: The ship's crew service and maintain the ship's systems and equipment.
                            properties:
                              capacity:
                                description: The maximum number of crew members the ship can support.
                                type: integer
                              current:
                                description: The current number of crew members on the ship.
                                type: integer
                              morale:
                                description: A rough measure of the crew's morale. A higher morale means the crew is happier and more productive. A lower morale means the ship is more prone to accidents.
                                maximum: 100
                                minimum: 0
                                type: integer
                              required:
                                description: The minimum number of crew members required to maintain the ship.
                                type: integer
                              rotation:
                                default: STRICT
                                description: The rotation of crew shifts. A stricter shift improves the ship's performance. A more relaxed shift improves the crew's morale.
                                enum:
                                  - STRICT
                                  - RELAXED
                                type: string
                              wages:
                                description: The amount of credits per crew member paid per hour. Wages are paid when a ship docks at a civilized waypoint.
                                minimum: 0
                                type: integer
                            required:
                              - current
                              - required
                              - capacity
                              - rotation
                              - morale
                              - wages
                            type: object
                          engine:
                            description: The engine determines how quickly a ship travels between waypoints.
                            properties:
                              condition:
                                $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/frame/properties/condition"
                              description:
                                type: string
                              name:
                                type: string
                              requirements:
                                $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/frame/properties/requirements"
                              speed:
                                minimum: 1
                                type: number
                              symbol:
                                enum:
                                  - ENGINE_IMPULSE_DRIVE_I
                                  - ENGINE_ION_DRIVE_I
                                  - ENGINE_ION_DRIVE_II
                                  - ENGINE_HYPER_DRIVE_I
                                type: string
                            required:
                              - symbol
                              - name
                              - description
                              - speed
                              - requirements
                            type: object
                          frame:
                            description: The frame of the ship. The frame determines the number of modules and mounting points of the ship, as well as base fuel capacity. As the condition of the frame takes more wear, the ship will become more sluggish and less maneuverable.
                            properties:
                              condition:
                                description: Condition is a range of 0 to 100 where 0 is completely worn out and 100 is brand new.
                                maximum: 100
                                minimum: 0
                                type: integer
                              description:
                                type: string
                              fuelCapacity:
                                minimum: 0
                                type: integer
                              moduleSlots:
                                minimum: 0
                                type: integer
                              mountingPoints:
                                minimum: 0
                                type: integer
                              name:
                                type: string
                              requirements:
                                description: The requirements for installation on a ship
                                properties:
                                  crew:
                                    description: The number of crew required for operation.
                                    type: integer
                                  power:
                                    description: The amount of power required from the reactor.
                                    type: integer
                                  slots:
                                    description: The number of module slots required for installation.
                                    type: integer
                                type: object
                              symbol:
                                enum:
                                  - FRAME_PROBE
                                  - FRAME_DRONE
                                  - FRAME_INTERCEPTOR
                                  - FRAME_RACER
                                  - FRAME_FIGHTER
                                  - FRAME_FRIGATE
                                  - FRAME_SHUTTLE
                                  - FRAME_EXPLORER
                                  - FRAME_MINER
                                  - FRAME_LIGHT_FREIGHTER
                                  - FRAME_HEAVY_FREIGHTER
                                  - FRAME_TRANSPORT
                                  - FRAME_DESTROYER
                                  - FRAME_CRUISER
                                  - FRAME_CARRIER
                                type: string
                            required:
                              - symbol
                              - name
                              - description
                              - moduleSlots
                              - mountingPoints
                              - fuelCapacity
                              - requirements
                            type: object
                          fuel:
                            description: Details of the ship's fuel tanks including how much fuel was consumed during the last transit or action.
                            properties:
                              capacity:
                                description: The maximum amount of fuel the ship's tanks can hold.
                                minimum: 0
                                type: integer
                              consumed:
                                properties:
                                  amount:
                                    description: The amount of fuel consumed by the most recent transit or action.
                                    minimum: 0
                                    type: integer
                                  timestamp:
                                    description: The time at which the fuel was consumed.
                                    format: date-time
                                    type: string
                                required:
                                  - amount
                                  - timestamp
                                type: object
                              current:
                                description: The current amount of fuel in the ship's tanks.
                                minimum: 0
                                type: integer
                            required:
                              - current
                              - capacity
                            type: object
                          modules:
                            items:
                              description: A module can be installed in a ship and provides a set of capabilities such as storage space or quarters for crew. Module installations are permanent.
                              properties:
                                capacity:
                                  minimum: 0
                                  type: integer
                                description:
                                  type: string
                                name:
                                  type: string
                                range:
                                  minimum: 0
                                  type: integer
                                requirements:
                                  $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/frame/properties/requirements"
                                symbol:
                                  enum:
                                    - MODULE_MINERAL_PROCESSOR_I
                                    - MODULE_CARGO_HOLD_I
                                    - MODULE_CREW_QUARTERS_I
                                    - MODULE_ENVOY_QUARTERS_I
                                    - MODULE_PASSENGER_CABIN_I
                                    - MODULE_MICRO_REFINERY_I
                                    - MODULE_ORE_REFINERY_I
                                    - MODULE_FUEL_REFINERY_I
                                    - MODULE_SCIENCE_LAB_I
                                    - MODULE_JUMP_DRIVE_I
                                    - MODULE_JUMP_DRIVE_II
                                    - MODULE_JUMP_DRIVE_III
                                    - MODULE_WARP_DRIVE_I
                                    - MODULE_WARP_DRIVE_II
                                    - MODULE_WARP_DRIVE_III
                                    - MODULE_SHIELD_GENERATOR_I
                                    - MODULE_SHIELD_GENERATOR_II
                                  type: string
                              required:
                                - symbol
                                - name
                                - requirements
                              type: object
                            type: array
                          mounts:
                            items:
                              description: A mount is installed on the exterier of a ship.
                              properties:
                                deposits:
                                  items:
                                    enum:
                                      - QUARTZ_SAND
                                      - SILICON_CRYSTALS
                                      - PRECIOUS_STONES
                                      - ICE_WATER
                                      - AMMONIA_ICE
                                      - IRON_ORE
                                      - COPPER_ORE
                                      - SILVER_ORE
                                      - ALUMINUM_ORE
                                      - GOLD_ORE
                                      - PLATINUM_ORE
                                      - DIAMONDS
                                      - URANITE_ORE
                                      - MERITIUM_ORE
                                    type: string
                                  type: array
                                description:
                                  type: string
                                name:
                                  type: string
                                requirements:
                                  $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/frame/properties/requirements"
                                strength:
                                  minimum: 0
                                  type: integer
                                symbol:
                                  enum:
                                    - MOUNT_GAS_SIPHON_I
                                    - MOUNT_GAS_SIPHON_II
                                    - MOUNT_GAS_SIPHON_III
                                    - MOUNT_SURVEYOR_I
                                    - MOUNT_SURVEYOR_II
                                    - MOUNT_SURVEYOR_III
                                    - MOUNT_SENSOR_ARRAY_I
                                    - MOUNT_SENSOR_ARRAY_II
                                    - MOUNT_SENSOR_ARRAY_III
                                    - MOUNT_MINING_LASER_I
                                    - MOUNT_MINING_LASER_II
                                    - MOUNT_MINING_LASER_III
                                    - MOUNT_LASER_CANNON_I
                                    - MOUNT_MISSILE_LAUNCHER_I
                                    - MOUNT_TURRET_I
                                  type: string
                              required:
                                - symbol
                                - name
                                - requirements
                              type: object
                            type: array
                          nav:
                            description: The navigation information of the ship.
                            properties:
                              flightMode:
                                default: CRUISE
                                description: The ship's set speed when traveling between waypoints or systems.
                                enum:
                                  - DRIFT
                                  - STEALTH
                                  - CRUISE
                                  - BURN
                                type: string
                              route:
                                description: The routing information for the ship's most recent transit or current location.
                                properties:
                                  arrival:
                                    description: The date time of the ship's arrival. If the ship is in-transit, this is the expected time of arrival.
                                    format: date-time
                                    type: string
                                  departure:
                                    $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav/properties/route/properties/destination"
                                  departureTime:
                                    description: The date time of the ship's departure.
                                    format: date-time
                                    type: string
                                  destination:
                                    description: The destination or departure of a ships nav route.
                                    properties:
                                      symbol:
                                        minLength: 1
                                        type: string
                                      systemSymbol:
                                        minLength: 1
                                        type: string
                                      type:
                                        description: The type of waypoint.
                                        enum:
                                          - PLANET
                                          - GAS_GIANT
                                          - MOON
                                          - ORBITAL_STATION
                                          - JUMP_GATE
                                          - ASTEROID_FIELD
                                          - NEBULA
                                          - DEBRIS_FIELD
                                          - GRAVITY_WELL
                                        type: string
                                      x:
                                        type: integer
                                      y:
                                        type: integer
                                    required:
                                      - symbol
                                      - type
                                      - systemSymbol
                                      - x
                                      - y
                                    type: object
                                required:
                                  - destination
                                  - departure
                                  - departureTime
                                  - arrival
                                type: object
                              status:
                                description: The current status of the ship
                                enum:
                                  - IN_TRANSIT
                                  - IN_ORBIT
                                  - DOCKED
                                type: string
                              systemSymbol:
                                description: The system symbol of the ship's current location.
                                type: string
                              waypointSymbol:
                                description: The waypoint symbol of the ship's current location, or if the ship is in-transit, the waypoint symbol of the ship's destination.
                                type: string
                            required:
                              - systemSymbol
                              - waypointSymbol
                              - route
                              - status
                              - flightMode
                            type: object
                          reactor:
                            description: The reactor of the ship. The reactor is responsible for powering the ship's systems and weapons.
                            properties:
                              condition:
                                $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/frame/properties/condition"
                              description:
                                type: string
                              name:
                                type: string
                              powerOutput:
                                minimum: 1
                                type: integer
                              requirements:
                                $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/frame/properties/requirements"
                              symbol:
                                enum:
                                  - REACTOR_SOLAR_I
                                  - REACTOR_FUSION_I
                                  - REACTOR_FISSION_I
                                  - REACTOR_CHEMICAL_I
                                  - REACTOR_ANTIMATTER_I
                                type: string
                            required:
                              - symbol
                              - name
                              - description
                              - powerOutput
                              - requirements
                            type: object
                          registration:
                            description: The public registration information of the ship
                            properties:
                              factionSymbol:
                                description: The symbol of the faction the ship is registered with
                                minLength: 1
                                type: string
                              name:
                                description: The agent's registered name of the ship
                                minLength: 1
                                type: string
                              role:
                                description: The registered role of the ship
                                enum:
                                  - FABRICATOR
                                  - HARVESTER
                                  - HAULER
                                  - INTERCEPTOR
                                  - EXCAVATOR
                                  - TRANSPORT
                                  - REPAIR
                                  - SURVEYOR
                                  - COMMAND
                                  - CARRIER
                                  - PATROL
                                  - SATELLITE
                                  - EXPLORER
                                  - REFINERY
                                type: string
                            required:
                              - name
                              - factionSymbol
                              - role
                            type: object
                          symbol:
                            description: "The globally unique identifier of the ship in the following format: `[AGENT_SYMBOL]_[HEX_ID]`"
                            type: string
                        required:
                          - symbol
                          - registration
                          - nav
                          - crew
                          - frame
                          - reactor
                          - engine
                          - modules
                          - mounts
                          - cargo
                          - fuel
                        type: object
                      token:
                        description: A Bearer token for accessing secured API endpoints.
                        type: string
                    required:
                      - token
                      - agent
                      - faction
                      - contract
                      - ship
                    type: object
                required:
                  - data
                type: object
          description: OK
      summary: Register New Agent
      tags: []
  /systems:
    get:
      description: Return a list of all systems.
      operationId: get-systems
      parameters:
        - description: What entry offset to request
          in: query
          name: page
          schema:
            minimum: 1
            type: integer
        - description: How many entries to return per page
          in: query
          name: limit
          schema:
            maximum: 20
            minimum: 1
            type: integer
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    items:
                      description: ""
                      properties:
                        factions:
                          items:
                            properties:
                              symbol:
                                minLength: 1
                                type: string
                            required:
                              - symbol
                            type: object
                          type: array
                        sectorSymbol:
                          minLength: 1
                          type: string
                        symbol:
                          minLength: 1
                          type: string
                        type:
                          description: The type of waypoint.
                          enum:
                            - NEUTRON_STAR
                            - RED_STAR
                            - ORANGE_STAR
                            - BLUE_STAR
                            - YOUNG_STAR
                            - WHITE_DWARF
                            - BLACK_HOLE
                            - HYPERGIANT
                            - NEBULA
                            - UNSTABLE
                          type: string
                        waypoints:
                          items:
                            properties:
                              symbol:
                                type: string
                              type:
                                $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav/properties/route/properties/destination/properties/type"
                              x:
                                type: integer
                              y:
                                type: integer
                            required:
                              - symbol
                              - type
                              - x
                              - y
                            type: object
                          type: array
                        x:
                          type: integer
                        y:
                          type: integer
                      required:
                        - symbol
                        - sectorSymbol
                        - type
                        - x
                        - y
                        - waypoints
                        - factions
                      type: object
                    type: array
                  meta:
                    description: ""
                    properties:
                      limit:
                        type: integer
                      page:
                        type: integer
                      total:
                        type: integer
                    required:
                      - total
                      - page
                      - limit
                    type: object
                    x-examples:
                      example-1:
                        limit: 20
                        page: 1
                        total: 6
                required:
                  - data
                  - meta
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: List Systems
      tags:
        - systems
  "/systems/{systemSymbol}":
    get:
      description: Get the details of a system.
      operationId: get-system
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    $ref: "#/paths/~1systems/get/responses/200/content/application~1json/schema/properties/data/items"
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Get System
      tags:
        - systems
    parameters:
      - description: The system symbol
        in: path
        name: systemSymbol
        required: true
        schema:
          default: X1-OE
          type: string
  "/systems/{systemSymbol}/waypoints":
    get:
      description: Fetch all of the waypoints for a given system. System must be charted or a ship must be present to return waypoint details.
      operationId: get-system-waypoints
      parameters:
        - description: What entry offset to request
          in: query
          name: page
          schema:
            minimum: 1
            type: integer
        - description: How many entries to return per page
          in: query
          name: limit
          schema:
            maximum: 20
            minimum: 1
            type: integer
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    items:
                      description: A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
                      properties:
                        chart:
                          description: The chart of a system or waypoint, which makes the location visible to other agents.
                          properties:
                            submittedBy:
                              type: string
                            submittedOn:
                              format: date-time
                              type: string
                            waypointSymbol:
                              type: string
                          type: object
                        faction:
                          properties:
                            symbol:
                              minLength: 1
                              type: string
                          required:
                            - symbol
                          type: object
                        orbitals:
                          items:
                            description: An orbital is another waypoint that orbits a parent waypoint.
                            properties:
                              symbol:
                                minLength: 1
                                type: string
                            required:
                              - symbol
                            type: object
                          type: array
                        symbol:
                          minLength: 1
                          type: string
                        systemSymbol:
                          minLength: 1
                          type: string
                        traits:
                          description: The traits of the waypoint.
                          items:
                            properties:
                              description:
                                description: A description of the trait.
                                type: string
                              name:
                                description: The name of the trait.
                                type: string
                              symbol:
                                description: The unique identifier of the trait.
                                enum:
                                  - UNCHARTED
                                  - MARKETPLACE
                                  - SHIPYARD
                                  - OUTPOST
                                  - SCATTERED_SETTLEMENTS
                                  - SPRAWLING_CITIES
                                  - MEGA_STRUCTURES
                                  - OVERCROWDED
                                  - HIGH_TECH
                                  - CORRUPT
                                  - BUREAUCRATIC
                                  - TRADING_HUB
                                  - INDUSTRIAL
                                  - BLACK_MARKET
                                  - RESEARCH_FACILITY
                                  - MILITARY_BASE
                                  - SURVEILLANCE_OUTPOST
                                  - EXPLORATION_OUTPOST
                                  - MINERAL_DEPOSITS
                                  - COMMON_METAL_DEPOSITS
                                  - PRECIOUS_METAL_DEPOSITS
                                  - RARE_METAL_DEPOSITS
                                  - METHANE_POOLS
                                  - ICE_CRYSTALS
                                  - EXPLOSIVE_GASES
                                  - STRONG_MAGNETOSPHERE
                                  - VIBRANT_AURORAS
                                  - SALT_FLATS
                                  - CANYONS
                                  - PERPETUAL_DAYLIGHT
                                  - PERPETUAL_OVERCAST
                                  - DRY_SEABEDS
                                  - MAGMA_SEAS
                                  - SUPERVOLCANOES
                                  - ASH_CLOUDS
                                  - VAST_RUINS
                                  - MUTATED_FLORA
                                  - TERRAFORMED
                                  - EXTREME_TEMPERATURES
                                  - EXTREME_PRESSURE
                                  - DIVERSE_LIFE
                                  - SCARCE_LIFE
                                  - FOSSILS
                                  - WEAK_GRAVITY
                                  - STRONG_GRAVITY
                                  - CRUSHING_GRAVITY
                                  - TOXIC_ATMOSPHERE
                                  - CORROSIVE_ATMOSPHERE
                                  - BREATHABLE_ATMOSPHERE
                                  - JOVIAN
                                  - ROCKY
                                  - VOLCANIC
                                  - FROZEN
                                  - SWAMP
                                  - BARREN
                                  - TEMPERATE
                                  - JUNGLE
                                  - OCEAN
                                  - STRIPPED
                                type: string
                            required:
                              - symbol
                              - name
                              - description
                            type: object
                          type: array
                        type:
                          $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/nav/properties/route/properties/destination/properties/type"
                        x:
                          type: integer
                        y:
                          type: integer
                      required:
                        - symbol
                        - type
                        - systemSymbol
                        - x
                        - y
                        - orbitals
                        - traits
                      type: object
                    type: array
                  meta:
                    $ref: "#/paths/~1systems/get/responses/200/content/application~1json/schema/properties/meta"
                required:
                  - data
                  - meta
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: List Waypoints
      tags:
        - systems
    parameters:
      - description: The system symbol
        in: path
        name: systemSymbol
        required: true
        schema:
          type: string
  "/systems/{systemSymbol}/waypoints/{waypointSymbol}":
    get:
      description: View the details of a waypoint.
      operationId: get-waypoint
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints/get/responses/200/content/application~1json/schema/properties/data/items"
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Get Waypoint
      tags:
        - systems
    parameters:
      - description: The system symbol
        in: path
        name: systemSymbol
        required: true
        schema:
          type: string
      - description: The waypoint symbol
        in: path
        name: waypointSymbol
        required: true
        schema:
          type: string
  "/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate":
    get:
      description: Get jump gate details for a waypoint.
      operationId: get-jump-gate
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    description: ""
                    properties:
                      connectedSystems:
                        description: The systems within range of the gate that have a corresponding gate.
                        items:
                          description: ""
                          properties:
                            distance:
                              type: integer
                            factionSymbol:
                              description: The symbol of the faction that owns the connected jump gate in the system.
                              type: string
                            sectorSymbol:
                              minLength: 1
                              type: string
                            symbol:
                              minLength: 1
                              type: string
                            type:
                              $ref: "#/paths/~1systems/get/responses/200/content/application~1json/schema/properties/data/items/properties/type"
                            x:
                              type: integer
                            y:
                              type: integer
                          required:
                            - symbol
                            - sectorSymbol
                            - type
                            - x
                            - y
                            - distance
                          type: object
                        type: array
                      factionSymbol:
                        description: The symbol of the faction that owns the gate.
                        type: string
                      jumpRange:
                        description: The maximum jump range of the gate.
                        type: number
                    required:
                      - jumpRange
                      - connectedSystems
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Get Jump Gate
      tags:
        - systems
    parameters:
      - description: The system symbol
        in: path
        name: systemSymbol
        required: true
        schema:
          type: string
      - description: The waypoint symbol
        in: path
        name: waypointSymbol
        required: true
        schema:
          type: string
  "/systems/{systemSymbol}/waypoints/{waypointSymbol}/market":
    get:
      description: Retrieve imports, exports and exchange data from a marketplace. Imports can be sold, exports can be purchased, and exchange goods can be purchased or sold. Send a ship to the waypoint to access trade good prices and recent transactions.
      operationId: get-market
      responses:
        "200":
          content:
            application/json:
              schema:
                properties:
                  data:
                    description: ""
                    properties:
                      exchange:
                        description: The list of goods that are bought and sold between agents at this market.
                        items:
                          $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints~1%7BwaypointSymbol%7D~1market/get/responses/200/content/application~1json/schema/properties/data/properties/exports/items"
                        type: array
                      exports:
                        description: The list of goods that are exported from this market.
                        items:
                          properties:
                            description:
                              type: string
                            name:
                              type: string
                            symbol:
                              enum:
                                - PRECIOUS_STONES
                                - QUARTZ_SAND
                                - SILICON_CRYSTALS
                                - AMMONIA_ICE
                                - LIQUID_HYDROGEN
                                - LIQUID_NITROGEN
                                - ICE_WATER
                                - EXOTIC_MATTER
                                - ADVANCED_CIRCUITRY
                                - GRAVITON_EMITTERS
                                - IRON
                                - IRON_ORE
                                - COPPER
                                - COPPER_ORE
                                - ALUMINUM
                                - ALUMINUM_ORE
                                - SILVER
                                - SILVER_ORE
                                - GOLD
                                - GOLD_ORE
                                - PLATINUM
                                - PLATINUM_ORE
                                - DIAMONDS
                                - URANITE
                                - URANITE_ORE
                                - MERITIUM
                                - MERITIUM_ORE
                                - HYDROCARBON
                                - ANTIMATTER
                                - FERTILIZERS
                                - FABRICS
                                - FOOD
                                - JEWELRY
                                - MACHINERY
                                - FIREARMS
                                - ASSAULT_RIFLES
                                - MILITARY_EQUIPMENT
                                - EXPLOSIVES
                                - LAB_INSTRUMENTS
                                - AMMUNITION
                                - ELECTRONICS
                                - SHIP_PLATING
                                - EQUIPMENT
                                - FUEL
                                - MEDICINE
                                - DRUGS
                                - CLOTHING
                                - MICROPROCESSORS
                                - PLASTICS
                                - POLYNUCLEOTIDES
                                - BIOCOMPOSITES
                                - NANOBOTS
                                - AI_MAINFRAMES
                                - QUANTUM_DRIVES
                                - ROBOTIC_DRONES
                                - CYBER_IMPLANTS
                                - GENE_THERAPEUTICS
                                - NEURAL_CHIPS
                                - MOOD_REGULATORS
                                - VIRAL_AGENTS
                                - MICRO_FUSION_GENERATORS
                                - SUPERGRAINS
                                - LASER_RIFLES
                                - HOLOGRAPHICS
                                - SHIP_SALVAGE
                                - RELIC_TECH
                                - NOVEL_LIFEFORMS
                                - BOTANICAL_SPECIMENS
                                - CULTURAL_ARTIFACTS
                                - REACTOR_SOLAR_I
                                - REACTOR_FUSION_I
                                - REACTOR_FISSION_I
                                - REACTOR_CHEMICAL_I
                                - REACTOR_ANTIMATTER_I
                                - ENGINE_IMPULSE_DRIVE_I
                                - ENGINE_ION_DRIVE_I
                                - ENGINE_ION_DRIVE_II
                                - ENGINE_HYPER_DRIVE_I
                                - MODULE_MINERAL_PROCESSOR_I
                                - MODULE_CARGO_HOLD_I
                                - MODULE_CREW_QUARTERS_I
                                - MODULE_ENVOY_QUARTERS_I
                                - MODULE_PASSENGER_CABIN_I
                                - MODULE_MICRO_REFINERY_I
                                - MODULE_ORE_REFINERY_I
                                - MODULE_FUEL_REFINERY_I
                                - MODULE_SCIENCE_LAB_I
                                - MODULE_JUMP_DRIVE_I
                                - MODULE_JUMP_DRIVE_II
                                - MODULE_JUMP_DRIVE_III
                                - MODULE_WARP_DRIVE_I
                                - MODULE_WARP_DRIVE_II
                                - MODULE_WARP_DRIVE_III
                                - MODULE_SHIELD_GENERATOR_I
                                - MODULE_SHIELD_GENERATOR_II
                                - MOUNT_GAS_SIPHON_I
                                - MOUNT_GAS_SIPHON_II
                                - MOUNT_GAS_SIPHON_III
                                - MOUNT_SURVEYOR_I
                                - MOUNT_SURVEYOR_II
                                - MOUNT_SURVEYOR_III
                                - MOUNT_SENSOR_ARRAY_I
                                - MOUNT_SENSOR_ARRAY_II
                                - MOUNT_SENSOR_ARRAY_III
                                - MOUNT_MINING_LASER_I
                                - MOUNT_MINING_LASER_II
                                - MOUNT_MINING_LASER_III
                                - MOUNT_LASER_CANNON_I
                                - MOUNT_MISSILE_LAUNCHER_I
                                - MOUNT_TURRET_I
                              type: string
                          required:
                            - symbol
                            - name
                            - description
                          type: object
                        type: array
                      imports:
                        description: The list of goods that are sought as imports in this market.
                        items:
                          $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints~1%7BwaypointSymbol%7D~1market/get/responses/200/content/application~1json/schema/properties/data/properties/exports/items"
                        type: array
                      symbol:
                        description: The symbol of the market. The symbol is the same as the waypoint where the market is located.
                        type: string
                      tradeGoods:
                        description: The list of goods that are traded at this market. Visible only when a ship is present at the market.
                        items:
                          properties:
                            purchasePrice:
                              description: The price at which this good can be purchased from the market.
                              minimum: 0
                              type: integer
                            sellPrice:
                              description: The price at which this good can be sold to the market.
                              minimum: 0
                              type: integer
                            supply:
                              description: A rough estimate of the total supply of this good in the marketplace.
                              enum:
                                - SCARCE
                                - LIMITED
                                - MODERATE
                                - ABUNDANT
                              type: string
                            symbol:
                              description: The symbol of the trade good.
                              type: string
                            tradeVolume:
                              description: The typical volume flowing through the market for this type of good. The larger the trade volume, the more stable prices will be.
                              minimum: 1
                              type: integer
                          required:
                            - symbol
                            - tradeVolume
                            - supply
                            - purchasePrice
                            - sellPrice
                          type: object
                        type: array
                      transactions:
                        description: The list of recent transactions at this market. Visible only when a ship is present at the market.
                        items:
                          properties:
                            pricePerUnit:
                              description: The price per unit of the transaction.
                              minimum: 1
                              type: integer
                            shipSymbol:
                              description: The symbol of the ship that made the transaction.
                              type: string
                            timestamp:
                              description: The timestamp of the transaction.
                              format: date-time
                              type: string
                            totalPrice:
                              description: The total price of the transaction.
                              minimum: 1
                              type: integer
                            tradeSymbol:
                              description: The symbol of the trade good.
                              type: string
                            type:
                              description: The type of transaction.
                              enum:
                                - PURCHASE
                                - SELL
                              type: string
                            units:
                              description: The number of units of the transaction.
                              minimum: 1
                              type: integer
                            waypointSymbol:
                              description: The symbol of the waypoint where the transaction took place.
                              type: string
                          required:
                            - waypointSymbol
                            - shipSymbol
                            - tradeSymbol
                            - type
                            - units
                            - pricePerUnit
                            - totalPrice
                            - timestamp
                          type: object
                        type: array
                    required:
                      - symbol
                      - exports
                      - imports
                      - exchange
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Get Market
      tags:
        - systems
    parameters:
      - description: The system symbol
        in: path
        name: systemSymbol
        required: true
        schema:
          type: string
      - description: The waypoint symbol
        in: path
        name: waypointSymbol
        required: true
        schema:
          type: string
  "/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard":
    get:
      description: Get the shipyard for a waypoint. Send a ship to the waypoint to access ships that are currently available for purchase and recent transactions.
      operationId: get-shipyard
      responses:
        "200":
          content:
            application/json:
              schema:
                description: ""
                properties:
                  data:
                    description: ""
                    properties:
                      shipTypes:
                        description: The list of ship types available for purchase at this shipyard.
                        items:
                          properties:
                            type:
                              description: ""
                              enum:
                                - SHIP_PROBE
                                - SHIP_MINING_DRONE
                                - SHIP_INTERCEPTOR
                                - SHIP_LIGHT_HAULER
                                - SHIP_COMMAND_FRIGATE
                                - SHIP_EXPLORER
                                - SHIP_HEAVY_FREIGHTER
                                - SHIP_LIGHT_SHUTTLE
                                - SHIP_ORE_HOUND
                                - SHIP_REFINING_FREIGHTER
                              type: string
                          type: object
                        type: array
                      ships:
                        description: The ships that are currently available for purchase at the shipyard.
                        items:
                          description: ""
                          properties:
                            description:
                              type: string
                            engine:
                              $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/engine"
                            frame:
                              $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/frame"
                            modules:
                              items:
                                $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/modules/items"
                              type: array
                            mounts:
                              items:
                                $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/mounts/items"
                              type: array
                            name:
                              type: string
                            purchasePrice:
                              type: integer
                            reactor:
                              $ref: "#/paths/~1register/post/responses/201/content/application~1json/schema/properties/data/properties/ship/properties/reactor"
                            type:
                              $ref: "#/paths/~1systems~1%7BsystemSymbol%7D~1waypoints~1%7BwaypointSymbol%7D~1shipyard/get/responses/200/content/application~1json/schema/properties/data/properties/shipTypes/items/properties/type"
                          required:
                            - symbol
                            - name
                            - description
                            - purchasePrice
                            - frame
                            - reactor
                            - engine
                            - modules
                            - mounts
                          type: object
                        type: array
                      symbol:
                        description: The symbol of the shipyard. The symbol is the same as the waypoint where the shipyard is located.
                        minLength: 1
                        type: string
                      transactions:
                        description: The list of recent transactions at this shipyard.
                        items:
                          properties:
                            agentSymbol:
                              description: The symbol of the agent that made the transaction.
                              type: string
                            price:
                              description: The price of the transaction.
                              minimum: 1
                              type: integer
                            shipSymbol:
                              description: The symbol of the ship that was purchased.
                              type: string
                            timestamp:
                              description: The timestamp of the transaction.
                              format: date-time
                              type: string
                            waypointSymbol:
                              description: The symbol of the waypoint where the transaction took place.
                              type: string
                          required:
                            - waypointSymbol
                            - shipSymbol
                            - price
                            - agentSymbol
                            - timestamp
                          type: object
                        type: array
                    required:
                      - symbol
                      - shipTypes
                    type: object
                required:
                  - data
                type: object
          description: OK
      security:
        - AgentToken: []
      summary: Get Shipyard
      tags:
        - systems
    parameters:
      - description: The system symbol
        in: path
        name: systemSymbol
        required: true
        schema:
          type: string
      - description: The waypoint symbol
        in: path
        name: waypointSymbol
        required: true
        schema:
          type: string
components:
  requestBodies: {}
  schemas: {}
  securitySchemes:
    AgentToken:
      description: When you register a new agent you will be granted a private bearer token which grants authorization to use the API.
      scheme: bearer
      type: http
